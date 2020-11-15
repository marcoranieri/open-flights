class Airline < ApplicationRecord
  before_create :slugify

  has_many :reviews

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    return 0 unless reviews.count.positive?

    reviews.average(:score).round(2).to_f
  end

end
