package com.example.creamy.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
@Document(collection = "carts")
public class Cart {
    @Id
    private String userId;
    private List<CartItem> items = new ArrayList<>();
    private double total;

    
}
