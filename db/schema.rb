# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_13_050945) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brands", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "document_types", force: :cascade do |t|
    t.string "CreateProvidersTable"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "laboratories", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "presentations", force: :cascade do |t|
    t.string "name"
    t.string "abbreviation"
    t.string "description"
    t.bigint "created_by"
    t.bigint "updated_by"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "price_by_presentations", force: :cascade do |t|
    t.float "amount"
    t.bigint "product_id"
    t.bigint "presentation_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["presentation_id"], name: "index_price_by_presentations_on_presentation_id"
    t.index ["product_id"], name: "index_price_by_presentations_on_product_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "code"
    t.string "components"
    t.string "location"
    t.string "digemid_code"
    t.string "description"
    t.bigint "laboratory_id"
    t.bigint "brand_id"
    t.bigint "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["brand_id"], name: "index_products_on_brand_id"
    t.index ["category_id"], name: "index_products_on_category_id"
    t.index ["laboratory_id"], name: "index_products_on_laboratory_id"
  end

  create_table "providers", force: :cascade do |t|
    t.string "name"
    t.bigint "document_type_id"
    t.string "document_number"
    t.bigint "district"
    t.string "address"
    t.string "cel_phone_number"
    t.bigint "created_by"
    t.bigint "updated_by"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["document_type_id"], name: "index_providers_on_document_type_id"
  end

  create_table "purchase_details", force: :cascade do |t|
    t.string "lot"
    t.date "expiration_date"
    t.float "unit_cost"
    t.float "quantity"
    t.bigint "purchase_id"
    t.bigint "product_id"
    t.bigint "laboratory_id"
    t.bigint "created_by"
    t.bigint "updated_by"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "boxes"
    t.bigint "blister"
    t.bigint "units"
    t.index ["laboratory_id"], name: "index_purchase_details_on_laboratory_id"
    t.index ["product_id"], name: "index_purchase_details_on_product_id"
    t.index ["purchase_id"], name: "index_purchase_details_on_purchase_id"
  end

  create_table "purchases", force: :cascade do |t|
    t.date "purchase_date"
    t.string "observations"
    t.float "total_amount"
    t.bigint "created_by"
    t.bigint "updated_by"
    t.bigint "provider_id"
    t.bigint "document_type_id"
    t.string "document_number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["document_type_id"], name: "index_purchases_on_document_type_id"
    t.index ["provider_id"], name: "index_purchases_on_provider_id"
  end

  create_table "sale_details", force: :cascade do |t|
    t.bigint "sale_id"
    t.bigint "laboratory_id"
    t.float "unit_price"
    t.float "quantity"
    t.bigint "created_by"
    t.bigint "updated_by"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "product_id"
    t.index ["laboratory_id"], name: "index_sale_details_on_laboratory_id"
    t.index ["product_id"], name: "index_sale_details_on_product_id"
    t.index ["sale_id"], name: "index_sale_details_on_sale_id"
  end

  create_table "sales", force: :cascade do |t|
    t.string "series"
    t.string "correlative"
    t.float "total_amount"
    t.string "legend"
    t.bigint "document_type_id"
    t.string "document_number"
    t.jsonb "sunat_info"
    t.bigint "created_by"
    t.bigint "updated_by"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["document_type_id"], name: "index_sales_on_document_type_id"
  end

  add_foreign_key "price_by_presentations", "presentations"
  add_foreign_key "price_by_presentations", "products"
  add_foreign_key "providers", "document_types"
  add_foreign_key "purchase_details", "laboratories"
  add_foreign_key "purchase_details", "products"
  add_foreign_key "purchase_details", "purchases"
  add_foreign_key "purchases", "document_types"
  add_foreign_key "purchases", "providers"
  add_foreign_key "sale_details", "laboratories"
  add_foreign_key "sale_details", "products"
  add_foreign_key "sale_details", "sales"
  add_foreign_key "sales", "document_types"
end
