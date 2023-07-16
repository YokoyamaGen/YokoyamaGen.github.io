# frozen_string_literal: true

shuffled_array = %w[A B C D E F].shuffle
element_count = rand(2..4)
p shuffled_array.first(element_count).sort
p shuffled_array.last(shuffled_array.length - element_count).sort
