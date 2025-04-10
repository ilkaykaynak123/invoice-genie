import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoices: any[] = [];

  constructor() {
    const storedInvoices = localStorage.getItem('invoices');
    if (storedInvoices) {
      this.invoices = JSON.parse(storedInvoices);
    }
  }

  addInvoice(invoice: any) {
    this.invoices.push(invoice);
    this.saveInvoices();
  }

  getInvoices() {
    return this.invoices;
  }

  private saveInvoices() {
    localStorage.setItem('invoices', JSON.stringify(this.invoices));
  }
}
