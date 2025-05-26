export interface User {
  id: number
  email: string
  name: string
  created_at: string
  updated_at: string
}

export interface Blog {
  id: number
  title: string
  description: string
  content: string
  image_url?: string
  tags: string[]
  published: boolean
  user_id: number
  author_name?: string
  created_at: string
  updated_at: string
}

export interface Contact {
  id: number
  name: string
  email: string
  phone: string
  service: string
  description: string
  status: "new" | "in-progress" | "completed"
  created_at: string
  updated_at: string
}

export interface PaginationResult<T> {
  data: T[]
  pagination: {
    total: number
    page: number
    limit: number
    pages: number
  }
}
