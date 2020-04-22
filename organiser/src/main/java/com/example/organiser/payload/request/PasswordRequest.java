package com.example.organiser.payload.request;
import java.util.Set;

import javax.validation.constraints.*;
 
public class PasswordRequest {
    @NotBlank
    @Size(min = 6, max = 40)
    private String oldpassword;
    
    @NotBlank
    @Size(min = 6, max = 40)
    private String opassword;

 
    public String getPassword() {
        return opassword;
    }
 
    public void setPassword(String password) {
        this.opassword = password;
    }

    public String getOldPassword() {
        return oldpassword;
    }
 
    public void setOldPassword(String oldpassword) {
        this.oldpassword = oldpassword;
    }
}
