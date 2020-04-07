
INSERT INTO users(user_id, user_name, user_password, user_email, user_avatar, 
    user_expired,user_non_locked,user_credentials_non_expired,user_enable)
VALUES 
  (1,'Tom','c4ca4238a0b923820dcc509a6f75849b','tom123@mail.ru', '88003215465',TRUE,TRUE,TRUE,TRUE),
  (2,'Bob','c81e728d9d4c2f636f067f89cc14862c','bob76@gmail.com', '88345674970',TRUE,TRUE,TRUE,TRUE),
  (3,'Nastya','c4ca4238a0b923820dcc509a6f75849b','bob76@gmail.com', '88345674970',TRUE,TRUE,TRUE,TRUE);

INSERT INTO lists(list_id, list_name, user_id)
VALUES 
  (1,'list1',1),
  (2,'list2',2),
  (3,'list2',1);

INSERT INTO events(event_id,event_name, event_start_date,event_end_date, event_colour,user_id)
VALUES
  (1,'event1', NOW(), NOW(),'red',1),
  (2,'event2', NOW(), NOW(),'green',2),
   (3,'event3', NOW(), NOW(),'blue',1),
   (4,'event4', NOW(), NOW(),'green',2);

INSERT INTO things(thing_id, thing_name, thing_description, thing_date, thing_state, user_id, list_id)
VALUES
  (1,'thing1','tidy room', NOW(), 'finished', 1 , 1),
    (2,'thing2','clean room', NOW(), 'opened', 2 , 2),
  (3,'thing3','wash car', NOW(), 'finished', 1 , 3);
