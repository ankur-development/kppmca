"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"
import { format } from "date-fns"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface Contact {
  id: number
  name: string
  email: string
  phone: string
  service: string
  description: string
  status: string
  created_at: string
}

interface PaginationData {
  total: number
  page: number
  limit: number
  pages: number
}

export default function ContactsPage() {
  const { token } = useAuth()
  const [contacts, setContacts] = useState<Contact[]>([])
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    page: 1,
    limit: 10,
    pages: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  const fetchContacts = async (page = 1) => {
    if (!token) return

    setIsLoading(true)
    try {
      console.log("Fetching contacts with token:", token) // Debug log

      const response = await fetch(`/api/contacts/list?page=${page}&limit=${pagination.limit}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("API error response:", errorData) // Debug log
        throw new Error(errorData.error || "Failed to fetch contacts")
      }

      const data = await response.json()
      setContacts(data.contacts || [])
      setPagination(data.pagination || pagination)
    } catch (error) {
      console.error("Error fetching contacts:", error)
      toast.error(error instanceof Error ? error.message : "Failed to fetch contacts")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (token) {
      fetchContacts()
    }
  }, [token])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contact Requests</h1>
        <p className="text-muted-foreground">View and manage contact form submissions</p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : contacts.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">No contact requests yet</h3>
          <p className="text-muted-foreground">Contact requests from your website will appear here</p>
        </div>
      ) : (
        <>
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead className="hidden md:table-cell">Service</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell className="font-medium">{contact.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{contact.email}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="outline">{contact.service}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {format(new Date(contact.created_at), "MMM d, yyyy")}
                    </TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedContact(contact)}>
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Contact Request</DialogTitle>
                            <DialogDescription>
                              Submitted on{" "}
                              {selectedContact && format(new Date(selectedContact.created_at), "MMMM d, yyyy")}
                            </DialogDescription>
                          </DialogHeader>
                          {selectedContact && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="text-sm font-medium">Name</h4>
                                  <p>{selectedContact.name}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-medium">Email</h4>
                                  <p>{selectedContact.email}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-medium">Phone</h4>
                                  <p>{selectedContact.phone}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-medium">Service</h4>
                                  <p>{selectedContact.service}</p>
                                </div>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium">Message</h4>
                                <p className="mt-1">{selectedContact.description}</p>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {pagination.pages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => fetchContacts(Math.max(1, pagination.page - 1))}
                    className={pagination.page <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                {Array.from({ length: pagination.pages }, (_, i) => i + 1)
                  .filter((page) => {
                    // Show first page, last page, current page, and pages around current page
                    return page === 1 || page === pagination.pages || Math.abs(page - pagination.page) <= 1
                  })
                  .map((page, i, arr) => {
                    // Add ellipsis
                    if (i > 0 && page - arr[i - 1] > 1) {
                      return (
                        <PaginationItem key={`ellipsis-${page}`}>
                          <span className="px-4">...</span>
                        </PaginationItem>
                      )
                    }

                    return (
                      <PaginationItem key={page}>
                        <PaginationLink onClick={() => fetchContacts(page)} isActive={page === pagination.page}>
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  })}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => fetchContacts(Math.min(pagination.pages, pagination.page + 1))}
                    className={
                      pagination.page >= pagination.pages ? "pointer-events-none opacity-50" : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  )
}
