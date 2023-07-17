# frozen_string_literal: true

require 'optparse'
require 'date'

opt = OptionParser.new
month = Date.today.month

opt.on('-m VAL') { |v| month = v.to_i }
opt.parse!(ARGV)

if month < 1 || month > 12
  puts "#{month} is neither a month number (1..12) nor a name"
  return
end

month_en = Date.new(Date.today.year, month, -1).strftime('%B')
puts format('%16s', "#{month_en} #{Date.today.year}")
puts 'Mo Tu We Th Fe Sa Su'

first_day = Date.new(Date.today.year, month, 1)
last_day = Date.new(Date.today.year, month, -1)
print '   ' * (first_day.cwday - 1)
(first_day..last_day).each do |everyday|
  new_line = "\n" if everyday.wday.zero? || everyday.day == last_day.day
  printf("%2d #{new_line}", everyday.day)
end
