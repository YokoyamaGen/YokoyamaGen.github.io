# frozen_string_literal: true

require './suica'
require './juice'
require './vending_machine'

puts '### ステップ1 Suica ###'
suica = Suica.new(500)
puts "Suicaのチャージ前の残高：#{suica.deposit}円"
suica.put(100)
puts "Suicaのチャージ後の残高：#{suica.deposit}円"
puts

puts '### ステップ2 ジュースの管理 ###'
pepsi = Juice.new('ペプシ', 150)
pepsi_list = Array.new(5, pepsi)
vending_machine = VendingMachine.new(pepsi, pepsi_list)
puts "#{pepsi.name}の在庫：#{vending_machine.juice_number_list(pepsi)}本"
puts

puts '### ステップ3 購入処理 ###'
vending_machine.purchase(suica, pepsi)
puts "#{pepsi.name}の在庫：#{vending_machine.juice_number_list(pepsi)}本"
puts "売り上げ金額：#{vending_machine.sales_amount}円"
puts "Suicaのチャージ残高：#{suica.deposit}円"
puts

puts '### ステップ4 機能拡張 ###'
monster = Juice.new('モンスター', 230)
monster_list = Array.new(5, monster)
vending_machine.add_juice(monster, monster_list)

irohas = Juice.new('いろはす', 150)
irohas_list = Array.new(5, irohas)
vending_machine.add_juice(irohas, irohas_list)

print '購入可能なドリンク: '
vending_machine.purchasable_list.each do |juice|
  print "#{juice} "
end
puts

puts "#{monster.name}の在庫補充前：#{vending_machine.juice_number_list(monster)}本"
vending_machine.add_number(monster)
puts "#{monster.name}の在庫補充後：#{vending_machine.juice_number_list(monster)}本"
puts

puts '### モンスター 購入処理 ###'
vending_machine.purchase(suica, monster)
puts "#{monster.name}の在庫：#{vending_machine.juice_number_list(monster)}本"
puts "売り上げ金額：#{vending_machine.sales_amount}円"
puts "Suicaのチャージ残高：#{suica.deposit}円"
puts

puts '### いろはす 購入処理 ###'
vending_machine.purchase(suica, irohas)
puts "#{irohas.name}の在庫：#{vending_machine.juice_number_list(irohas)}本"
puts "売り上げ金額：#{vending_machine.sales_amount}円"
puts "Suicaのチャージ残高：#{suica.deposit}円"
puts
