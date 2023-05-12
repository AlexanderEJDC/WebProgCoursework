-- Up 

CREATE TABLE Messages (
  id   CHAR(36) PRIMARY KEY,
  dateDone  TEXT    NOT NULL,
  work  TEXT    NOT NULL,
  xp    TEXT    NOT NULL, 
  competencies  TEXT    NOT NULL
);

INSERT INTO Messages (id, dateDone, work, xp, competencies) VALUES 
(
    '03',
    '2023-05-08',
    'Basic memory handling',
    'basic js skill',
    'A1'
),
(
    '02',
    '2023-05-09',
    'Enabled Editing',
    'basic js',
    'A2'
),
(
    '01',
    '2023-05-11',
    'Built the database',
    'basic SQL skill',
    'A1'
);

-- Down 

DROP TABLE Messages; 