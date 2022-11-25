package com.onlinecalc.onlineCalc.service;

import org.springframework.stereotype.Service;

@Service
public class operationsService {
    public String binOp(Double x, String op, Double y) {
        Double ans = 0.0;
        switch (op) {
            case "add" -> ans = x + y;
            case "sub" -> ans = x - y;
            case "multiply" -> ans = x * y;
            case "divide" -> {
                if (y == 0.0) return null;
                ans = x / y;
            }
        }
        return String.valueOf(ans);
    }

    public String uniOp(Double x, String op) {
        Double ans = 0.0;
        switch (op) {
            case "percent" -> ans = x / 100;
            case "sign" -> ans = -x;
            case "squared" -> ans = x * x;
            case "sqrt" -> {
                if (x < 0.0) return null;
                ans = Math.sqrt(x);
            }
            case "reciprocal" -> {
                if (x == 0.0) return null;
                ans = 1 / x;
            }
        }
        return String.valueOf(ans);
    }

}
