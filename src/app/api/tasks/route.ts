import { NextRequest, NextResponse } from 'next/server';
import { tasks } from '@/lib/data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const category = searchParams.get('category');
  const priority = searchParams.get('priority');

  let filtered = [...tasks];

  if (status && status !== 'all') {
    filtered = filtered.filter(t => t.status === status);
  }
  if (category && category !== 'all') {
    filtered = filtered.filter(t => t.category === category);
  }
  if (priority && priority !== 'all') {
    filtered = filtered.filter(t => t.priority === priority);
  }

  return NextResponse.json({
    success: true,
    data: filtered,
    pagination: {
      page: 1,
      limit: filtered.length,
      total: filtered.length,
      totalPages: 1,
    },
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // In production, validate and save to database
  const newTask = {
    id: `tsk-${Date.now()}`,
    ...body,
    createdAt: new Date().toISOString(),
    subtasks: body.subtasks || [],
  };

  return NextResponse.json({
    success: true,
    data: newTask,
  }, { status: 201 });
}
