package com.example.hotelbooking.service;

public package com.example.hotelbooking.service;

import com.example.hotelbooking.entity.Hotel;
import com.example.hotelbooking.repository.HotelRepository;
import com.example.hotelbooking.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelService {

    @Autowired
    private HotelRepository hotelRepo;

    // 🔍 Search hotels by location
    public List<Hotel> searchHotels(String location) {
        return hotelRepo.findByLocation(location);
    }

    // 📄 Get hotel by ID
    public Hotel getHotelById(Long id) {
        return hotelRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Hotel not found"));
    }
} 
