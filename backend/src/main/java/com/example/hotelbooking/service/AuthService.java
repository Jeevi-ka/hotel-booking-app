package com.example.hotelbooking.service;

import com.example.hotelbooking.dto.*;

public interface AuthService {
    String signup(SignupRequest request);
    String login(LoginRequest request);
}