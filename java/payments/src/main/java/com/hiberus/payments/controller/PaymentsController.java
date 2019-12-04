package com.hiberus.payments.controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.time.LocalDateTime;
import java.util.List;

@RestController
public class PaymentsController {

    List<PaymentInvoice> invoices;

    @PostMapping("/pay/{user}")
    public PaymentInvoice pay(@PathVariable("user") String user, @PathParam("ammount") Float ammount) throws InvalidAccountException {
        System.out.println("User " + user);
        if ("ohierro".equals(user)) {
            return new PaymentInvoice("ohierro", LocalDateTime.now(), false, ammount);
        } else {
            throw new InvalidAccountException();
        }
    }


//    public Boolean getStatus() {
//
//    }

    @Data
    @AllArgsConstructor
    class PaymentInvoice {
        String user;
        LocalDateTime timestamp;
        Boolean completed;
        Float quantity;
    }

}
