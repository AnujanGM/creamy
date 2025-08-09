package com.example.creamy.service;

import org.springframework.stereotype.Service;

import com.example.creamy.model.Cart;
import com.example.creamy.model.CartItem;
import com.example.creamy.repository.CartRepository;

@Service
public class CartService {

    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Cart getCart(String userId) {
        return cartRepository.findById(userId).orElse(new Cart(userId, null, 0));
    }

    public Cart addItem(String userId, CartItem item) {
        Cart cart = getCart(userId);

        if (cart.getItems() == null) {
            cart.setItems(new java.util.ArrayList<>());
        }

        // Check if item exists
        boolean found = false;
        for (CartItem existingItem : cart.getItems()) {
            if (existingItem.getName().equalsIgnoreCase(item.getName())) {
                existingItem.setQuantity(existingItem.getQuantity() + item.getQuantity());
                found = true;
                break;
            }
        }
        if (!found) {
            cart.getItems().add(item);
        }

        recalculateTotal(cart);
        return cartRepository.save(cart);
    }

    public Cart checkout(String userId) {
        Cart cart = getCart(userId);
        // Need to do : send cart to Admin API here
        cartRepository.deleteById(userId);
        return cart;
    }

    private void recalculateTotal(Cart cart) {
        double total = cart.getItems().stream()
                .mapToDouble(i -> i.getPrice() * i.getQuantity())
                .sum();
        cart.setTotal(total);
    }
}
