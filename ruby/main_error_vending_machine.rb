# frozen_string_literal: true

require './suica'
require './juice'
require './vending_machine'

puts '### 例外 ジュース購入時にSuicaのチャージ残高不足 ###'
suica = Suica.new(100)
pepsi = Juice.new('ペプシ', 150)
vending_machine = VendingMachine.new(pepsi, 5)
vending_machine.purchase(suica, pepsi)
