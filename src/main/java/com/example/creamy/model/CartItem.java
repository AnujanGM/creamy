package com.example.creamy.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CartItem {
    private String name;
    private double price;
    private int quantity;
    
}
