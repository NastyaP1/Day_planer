package com.example.organiser.payload.request;
import java.util.Set;
    
import javax.validation.constraints.*;

public class UpdateRequest {
        @NotBlank
        @Size(min = 3, max = 20)
        private String username;
     
        @NotBlank
        @Size(max = 50)
        @Email
        private String email;
      
        public String getUsername() {
            return username;
        }
     
        public void setUsername(String username) {
            this.username = username;
        }
     
        public String getEmail() {
            return email;
        }
     
        public void setEmail(String email) {
            this.email = email;
        }
        
        
    }
    