import { test, expect } from '@playwright/test';
import { z } from 'zod';

const bookingIdsSchema = z.array(z.object({
  bookingid: z.number(),
}));

const bookingSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  totalprice: z.number(),
  depositpaid: z.boolean(),
  bookingdates: z.object({
    checkin: z.string(),
    checkout: z.string(),
  }),
  additionalneeds: z.string().optional(),
});
test("GET all bookings", async ({ request }) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking');
    expect(response.status()).toBe(200);
  
    const bookings = await response.json();
    expect(() => bookingIdsSchema.parse(bookings)).not.toThrow();
  });

  test("GET booking by ID", async ({ request }) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking/1');
    expect(response.status()).toBe(200);
    
    const booking = await response.json();
    expect(() => bookingSchema.parse(booking)).not.toThrow();
  
    const { firstname, lastname } = booking;
  
    expect(firstname).toBe('Eric');
    expect(lastname).toBe('Jackson');
  });