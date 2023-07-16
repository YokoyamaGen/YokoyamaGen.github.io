## 環境構築方法

<br>


1. ターミナルに以下コマンドを入力して、環境構築に必要なプログラムをローカル環境にダウンロード
```
git clone https://github.com/YokoyamaGen/hc_practice.git
```


<br> 

2. ディレクトリ移動 

```
cd /hc_practice/ruby
```

<br> 

3. Dockerイメージを作成
```
docker build -t ruby-docker .
```

<br> 

4. コンテナの作成および起動
```
docker run -it -v ~/Desktop/hc_practice/ruby:/ruby-docker --rm ruby-docker bash
```

<br> 

5. 実行したいRubyプログラム名を指定して、実行
```
ruby 実行したいプログラム名
```