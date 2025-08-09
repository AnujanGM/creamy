package com.example.creamy.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.creamy.model.Cart;

public interface CartRepository extends MongoRepository<Cart, String> {
}
