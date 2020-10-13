# Cắm điện thoại, 
## nhập lệnh terminal : "adb devices" để kiểm tra xem nhận thiết bị chưa
## yarn android : build ứng dụng
# Nếu chạy bằng điện thoại thật thì sửa lại API_URL = 'http://127.0.0.1:8888' trong /apis/Constance.js
## sau đó vào chrome://inspect/device#devices để thiết lập kết nối từ điện thoại đến server local trên máy tính
## vào chrome trên điện thoại 'http://127.0.0.1:8888' xem đã kết nối đc chưa

# Nếu chạy băng máy ảo
## Chạy bằng emulator của Android studio thì k cần sửa gì
## Chạy bằng genymotion: 
### Mở oracle virtual box, kiểm tra tên adapter network đang chạy máy ảo
### cmd -> ipconfig -> tìm tên adapter network đã tìm thấy ở bước trên -> lấy địa chỉ IPv4, rồi sửa API_URL = http://<IPv4>:8888
