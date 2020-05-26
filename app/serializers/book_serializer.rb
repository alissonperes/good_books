class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :slug
end
