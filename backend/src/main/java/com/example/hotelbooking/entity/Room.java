package com.example.hotelbooking.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String roomType;
    private double price;
    private int totalRooms;

    @ManyToOne
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;
}