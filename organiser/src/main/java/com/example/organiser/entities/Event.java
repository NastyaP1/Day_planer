package com.example.organiser.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"user_id"})
@Entity
@Table(name = "events")
public class Event {
    
    @Id
    @SequenceGenerator(name = "event_id_seq", sequenceName = "event_event_id_seq", allocationSize = 1, initialValue = 100)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "event_id_seq")
    @Column(name = "event_id")
    private Integer id;

    @JsonProperty(value = "name")
    @Column(name = "event_name")
    private String name;

    @JsonProperty(value = "start_date")
    @Column(name = "event_start_date")
    private Date start_date;

    @JsonProperty(value = "end_date")
    @Column(name = "event_end_date")
    private Date end_date;

    @JsonProperty(value = "colour")
    @Column(name = "event_colour")
    private String colour;

    @JsonProperty(value = "user_id")
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User owner;

}