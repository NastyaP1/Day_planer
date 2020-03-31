package com.example.organiser.entities;

import java.util.Collection;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({ "password", "events", "things", "listsToDo", "serialVersionUID", "accountNonExpired", "accountNonLocked",
        "credentialsNonExpired", "enabled", "username" })
@Entity
@Table(name = "users")
public class User implements UserDetails {

    private static final long serialVersionUID = 1L;
    @Id
    @SequenceGenerator(name = "user_seq", sequenceName = "users_user_id_seq", allocationSize = 1, initialValue = 100)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
    @Column(name = "user_id")
    private Integer id;

    @Column(name = "user_name")
    private String name;

    @Column(name = "user_password")
    private String password;

    @Column(name = "user_email")
    private String email;

    @Column(name = "user_avatar")
    private String avatar;

    @OneToMany(mappedBy = "owner")
    @Column(name = "user_events")
    private Set<Event> events;

    @OneToMany(mappedBy = "owner")
    @Column(name = "user_things")
    private Set<Thing> things;

    @OneToMany(mappedBy = "owner")
    @Column(name = "user_lists_to_do")
    private Set<ListToDo> listsToDo;

    @Column(name = "user_expired")
    private boolean accountNonExpired;

    @Column(name = "user_non_locked")
    private boolean accountNonLocked;

    @Column(name = "user_credentials_non_expired")
    private boolean credentialsNonExpired;

    @Column(name = "user_enable")
    private boolean enabled;

    @Override
    public String getUsername() {
        return this.getName();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // TODO Auto-generated method stub
        return null;
    }

}