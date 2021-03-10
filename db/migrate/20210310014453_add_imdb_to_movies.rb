class AddImdbToMovies < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :imdb, :string
  end
end
