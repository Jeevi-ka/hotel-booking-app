package com.example.hotelbooking.service;

import com.example.hotelbooking.entity.*;
import com.example.hotelbooking.repository.*;
import com.example.hotelbooking.dto.BookingRequest;
import com.example.hotelbooking.exception.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepo;

    @Autowired
    private RoomRepository roomRepo;

    @Autowired
    private UserRepository userRepo;

    // 📌 Book room
    public Booking bookRoom(Long userId, BookingRequest request) {

        Room room = roomRepo.findById(request.getRoomId())
                .orElseThrow(() -> new ResourceNotFoundException("Room not found"));

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Booking booking = new Booking();
        booking.setUser(user);
        booking.setRoom(room);
        booking.setCheckInDate(request.getCheckInDate());
        booking.setCheckOutDate(request.getCheckOutDate());
        booking.setStatus("BOOKED");

        return bookingRepo.save(booking);
    }

    // 📄 Get bookings of user
    public List<Booking> getUserBookings(Long userId) {
        return bookingRepo.findByUserId(userId);
    }

    // ❌ Cancel booking
    public Booking cancelBooking(Long bookingId) {

        Booking booking = bookingRepo.findById(bookingId)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found"));

        booking.setStatus("CANCELLED");

        return bookingRepo.save(booking);
    }
}