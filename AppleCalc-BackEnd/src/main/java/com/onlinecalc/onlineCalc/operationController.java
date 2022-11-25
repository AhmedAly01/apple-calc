package com.onlinecalc.onlineCalc;

import com.onlinecalc.onlineCalc.service.operationsService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/calc")
public class operationController {
    private final operationsService opService;

    public operationController(operationsService opService) {
        this.opService = opService;
    }
    @GetMapping("/{x}/{op}/{y}")
    public String binaryOp (@PathVariable("x") Double x, @PathVariable("op") String op, @PathVariable("y") Double y) {
        return opService.binOp(x, op, y);
    }

    @GetMapping("/{x}/{op}")
    public String unaryOp(@PathVariable("x") Double x, @PathVariable("op") String op) {
        return opService.uniOp(x, op);
    }

}
