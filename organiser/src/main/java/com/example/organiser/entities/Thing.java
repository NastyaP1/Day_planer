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
@JsonIgnoreProperties({ "user_id"})
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "things")
public class Thing {
    @Id
    @SequenceGenerator(name = "thing_id_seq", sequenceName = "thing_thing_id_seq", allocationSize = 1, initialValue = 100)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "thing_id_seq")
    @Column(name = "thing_id")
    private Integer id;

    @JsonProperty(value = "name")
    @Column(name = "thing_name")
    private String name;

    @JsonProperty(value = "description")
    @Column(name = "thing_description")
    private String description;
    
    @JsonProperty(value = "date")
    @Column(name = "thing_date")
    private Date date;

    @JsonProperty(value = "state")
    @Column(name = "thing_state")
    private String state;

    @JsonProperty(value = "user_id")
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User owner;

    @JsonProperty(value = "list_id")
    @ManyToOne
    @JoinColumn(name = "list_id")
    private ListToDo list;

    public Integer getListId() {
		return list.getId();
	}
}