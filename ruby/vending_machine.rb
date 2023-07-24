# frozen_string_literal: true

# Suica版自動販売機問題の自動販売機クラス
class VendingMachine
  DEFAULT_SALES_AMOUNT = 0

  attr_reader :sales_amount

  def initialize(juice, juice_list, sales_amount = DEFAULT_SALES_AMOUNT)
    @juice_list = { juice.name => juice_list }
    @sales_amount = sales_amount
  end

  def juice_number_list(juice)
    @juice_list[juice.name].size
  end

  def purchase(suica, juice)
    if suica.deposit < juice.price || juice_number_list(juice) <= 0
      raise "You don't have enough money on your card or no juice in stock."
    end

    @juice_list[juice.name].shift
    add_sales_amount(juice.price)
    suica.call_reduce(juice.price)
  end

  def purchasable_list
    purchasable_juice = @juice_list.select { |_k, v| v.size.positive? }
    purchasable_juice.keys
  end

  def add_juice(new_juice, new_juice_list)
    @juice_list[new_juice.name] = new_juice_list
  end

  def add_number(juice)
    @juice_list[juice.name].push(juice)
  end

  private

  def add_sales_amount(price)
    @sales_amount += price
  end
end
