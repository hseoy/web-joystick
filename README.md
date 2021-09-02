# web-joystick

이 프로젝트는 학교 동아리 축제에서 SerBot 이동 체험 부스를 운영하기 위한 목적으로 시작되었지만 코로나 19로 인해 축제가 취소 혹은 연기되어 세상에 나오지 못했던 프로젝트입니다.

SerBot의 리눅스 OS상에서 실행되고 있는 Flask Server와 웹소켓으로 통신하며 현재 연결된 SerBot의 HostName을 상단에 표시하고 조이스틱을 움직일 때마다 현재 조이스틱 좌표 정보를 전송합니다. Flask Server에서는 해당 좌표를 받아 SerBot을 이동시킵니다.

사용 기술 및 라이브러리: React, Socket.IO, React Nipple, Axios

Flask Server Code : https://github.com/DSM-ESD/festival-2021-with-serbot/tree/main/serbot-web-controller/backend/Flask_websocket 

### 실행 화면
<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="100%" alt="image" src="https://user-images.githubusercontent.com/75124422/131829725-21744479-4554-4910-a8c9-4b855f5628fd.PNG">
      </td>
    </tr>
  </tbody>
</table>

### 실행 영상 

https://user-images.githubusercontent.com/75124422/131828173-5d0f1cb3-9130-4825-a7f0-e8181b05c167.mp4


