# MONGODB 자동 백업 방법
## 1. backup.sh 쉘 파일 생성 및 작성

- 쉘 파일 생성 후 편집모드로 들어가기
```
vi backup.sh
```
- 내용 입력
```
#!/bin/sh
mongodump -h 호스트 --port 포트번호 -u 사용자계정 -p 비번 -d 디비명  -o 백업폴더
```

ex )
#!/bin/sh
mongodump -h localhost --port 27017 -u admin -p 1234 -d backup -o /home/dcarrick/backuptest/dump

백업폴더 뒤에 아무것도 적지 않으면 해당 폴더(ex.dump)에 계속 덮어씌워 저장된다.

백업폴더 바로 뒤에 _$(date +**%y%m%d_%H%M**) 추가하면 ( y = 연도, m = 월, d = 일, H = 시간, M = 분 )백업시간까지 폴더명에 저장해주겠다는 뜻. 이렇게 하면 데이터가 중복되어 저장되므로 서버 용량이 초과하지 않도록 않도록 주의.

**해석**
#!/bin/sh : 해당 파일을 bash 쉘로 실행시키겠다는 의미이다. (주석 아닙니다.)
mongodump -h 호스트 --port 포트 -d 디비명 -u 사용자계정 -p 비밀번호 -o 백업폴더
$(date +**%y%m%d_%H%M**) : ( y = 연도, m = 월, d = 일, H = 시간, M = 분 )

## 2.쉘 파일 권한 부여

```
chmod 755 backup.sh
```

## 3.외부 몽고 디비를 백업
BSON으로 데이터 백업됩니다.
```
mongodump -h 호스트:포트 -d 디비명 -u 사용자계정 -p 비밀번호 -o 백업폴더
```
ex ) mongodump -h localhost:27017 -d backup -u admin -p 1234 -o /home/dcarrick/backuptest/dump
 


## 4. crontab( 일정 시간마다 작업 수행 ) 에 등록
- 크론탭 편집모드로 들어가기
```
crontab -e
```
- 내용 입력(지정하는 시간마다 해당 파일이 실행됨)
```
* * * * * /home/sea/backup.sh
```
기본적으로 위와 같이 공백(space)으로 5개 값을 구분하여 설정한다.

```
* * * * * <SHELL_PATH>
분 시 일 월 요일 쉘스크립트경로
```
ex )

| <center>Expressions</center> |  <center>Desc</center> |
| :- |  -: |
| <center>* * * * *</center> | <center>매일 1분마다 실행</center> |
| <center>5 * * * *</center> | <center>매일 매시간 05분에 실행 (1시간 간격으로 실행)</center> 
| <center>0 */1 * * *</center> | <center>매일 1시간 간격으로 실행 (매시간 00분)</center> |
| <center>28 03 * * *</center> | <center>매일 03시 28분에 실행</center> |

## 5. 등록된 계획 확인
```
crontab -l
```
## 6. cron이 잘 동작하고 있는지 확인
```
pgrep cron
```
숫자 잘 나오면 실행되고 있음, 아무것도 안 나오면 실행 안됨




# MONGODB 백업 데이터 복구 방법

방법 1 ) 중복된 키 제외한 값만 복구됨
```
mongorestore --host 호스트 --port 포트번호 --db 사용할디비명 <복구할 덤프데이터가 있는 디렉토리>
```
ex ) mongorestore --host localhost --port 27017 --db backup /home/dcarrick/backuptest/dump/backup 
중복된 키가 있으면 아래 에러가 뜹니다.
에러내용 : continuing through error: E11000 duplicate key error collection


방법 2 ) 새로운 디비에 복구하고 싶으면 사용할 디비명에 새로운 디비 이름 적으면 되는데 
그러면 새로운 디비명으로 되어있는 컬렉션이 생성되어 해당 컬렉션에 데이터가 복구됩니다.
새로 생성된 컬렉션이라 해당 컬렉션에 유저 정보 없음.

방법 3 ) 데이터가 전부 덮어씌워서 복구됨
```
mongorestore --host 호스트 --port 포트번호 --drop --db 사용할디비명 <복구할 덤프데이터가 있는 디렉토리>
```


