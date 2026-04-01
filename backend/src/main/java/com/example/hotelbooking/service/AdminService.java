package com.example.hotelbooking.service;

import com.example.hotelbooking.entity.*;
import com.example.hotelbooking.repository.*;
import com.example.hotelbooking.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private HotelRepository hotelRepo;

    @Autowired
    private RoomRepository roomRepo;

    @Autowired
    private BookingRepository bookingRepo;

    // ➕ Add hotel
    public Hotel addHotel(Hotel hotel) {
        return hotelRepo.save(hotel);
    }

    // ➕ Add room to hotel
    public Room addRoom(Long hotelId, Room room) {

        Hotel hotel = hotelRepo.findById(hotelId)
                .orElseThrow(() -> new ResourceNotFoundException("Hotel not found"));

        room.setHotel(hotel);

        return roomRepo.save(room);
    }

    // 📄 View all bookings
    public List<Booking> getAllBookings() {
        return bookingRepo.findAll();
    }
}