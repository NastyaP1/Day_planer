package com.example.organiser.payload.request;
import java.util.Set;
    
import javax.validation.constraints.*;

public class AvatarRequest {
        @NotBlank
        private String avatar;
      
        public String getAvatar() {
            return avatar;
        }
     
        public void setAvatar(String username) {
            this.avatar = username;
        }
        
    }