node搭建一个简单的静态资源管理器
MIME 类型
MIME (Multipurpose Internet Mail Extensions) 是描述消息内容类型的因特网标准。
MIME 消息能包含文本、图像、音频、视频以及其他应用程序专用的数据。
重点：主要是要让每个文件的mime类型让浏览器识别。
思路:
1、获取每个文件的尾缀
2、node读取mime.json(包含所有文件的mime类型）的内容，取键值
3、用每个文件的尾缀和key去比较，返回值，填充到content-type里面

用到的node模块：
http:创建服务器
fs:读取文件
url:拿文件路径名称
path:获取文件尾缀

JS主要涉及一个遍历对象

综上，就搭建好了一个类似apache静态资源托管的服务器了，本例丢了一个慕课网的静态例子来运行查看