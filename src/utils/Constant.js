import { SIDEBARICONS, HOMEPAGEIMAGE, ProductListImage } from "../assets/Image";
const drawerWidth = 240;

const icon = [
  {
    id: 0,
    label: "Men's Colths",
    image: SIDEBARICONS.NavbarIcon2,
    to: "/mensColths",
  },
  {
    id: 1,
    label: "Womens Colths",
    image: SIDEBARICONS.NavbarIcon1,
    to: "/womenColths",
  },
  {
    id: 2,
    label: "Kids wear",
    image: SIDEBARICONS.NavbarIcon3,
    to: "/Kidswear",
  },
  {
    id: 3,
    label: "Home Appliance",
    image: SIDEBARICONS.NavbarIcon4,
    to: "/HomeAppliance",
  },
  {
    id: 4,
    label: "FootWare",
    image: SIDEBARICONS.NavbarIcon5,
    to: "/footwear",
  },
  {
    id: 5,
    label: "Jewelary",
    image: SIDEBARICONS.NavbarIcon6,
    to: "/Jewelary",
  },
];

const iconSidebar2 = [
  { id: 0, label: "Best Seller", image: SIDEBARICONS.NavbarIcon9 },
  { id: 1, label: "New Relese", image: SIDEBARICONS.NavbarIcon10 },
  { id: 1, label: "Offers", image: SIDEBARICONS.NavbarIcon11 },
];

const iconSidebar = [
  { id: 0, label: "Cutomer Care", image: SIDEBARICONS.NavbarIcon7 },
  { id: 1, label: "Profile", image: SIDEBARICONS.NavbarIcon8 },
];
const HomeSliderImages = [
  { id: 0, image: HOMEPAGEIMAGE.HomePageSlider1 },
  { id: 0, image: HOMEPAGEIMAGE.HomePageSlider2 },
  { id: 0, image: HOMEPAGEIMAGE.HomePageSlider3 },
  { id: 0, image: HOMEPAGEIMAGE.HomePageSlider4 },
  { id: 0, image: HOMEPAGEIMAGE.HomePageSlider5 },
  { id: 0, image: HOMEPAGEIMAGE.HomePageSlider6 },
];
const CardDataHome = [
  { id: 0, label: "Womans Wear", image: HOMEPAGEIMAGE.DealOfDayPage1 },
  { id: 2, label: "Mens wear", image: HOMEPAGEIMAGE.DealOfDayPage2 },
  { id: 3, label: "Western wear", image: HOMEPAGEIMAGE.DealOfDayPage3 },
  { id: 4, label: "Footware ", image: HOMEPAGEIMAGE.DealOfDayPage4 },
  { id: 4, label: "Cosmatics", image: HOMEPAGEIMAGE.DealOfDayPage5 },
  { id: 2, label: "Mens wear", image: HOMEPAGEIMAGE.DealOfDayPage2 },
  { id: 2, label: "Kids wear", image: HOMEPAGEIMAGE.DealOfDayPage6 },
];

const ProductListData = [
  {
    id: 0,
    label: "Womens Wear",
    image: ProductListImage.Womenwear1,
    price: 1200,
    size: "M",
  },
  {
    id: 1,
    label: "Womens Wear",
    image: ProductListImage.Womenwear2,
    price: 1060,
    size: "L",
  },
  {
    id: 2,
    label: "Womens Wear",
    image: ProductListImage.Womenwear3,
    price: 1500,
    size: "XL",
  },
  {
    id: 3,
    label: "Womens Wear",
    image: ProductListImage.Womenwear4,
    price: 1500,
    size: "XS",
  },
  {
    id: 4,
    label: "Mens wear",
    image: ProductListImage.menswear1,
    price: 1050,
    size: "S",
  },
  {
    id: 5,
    label: "Mens wear",
    image: ProductListImage.menswear2,
    price: 1050,
    size: "XLL",
  },
  {
    id: 6,
    label: "Mens wear",
    image: ProductListImage.menswear3,
    price: 1050,
    size: "M",
  },
  {
    id: 7,
    label: "Mens wear",
    image: ProductListImage.menswear4,
    price: 1050,
    size: "S",
  },
  {
    id: 8,
    label: "Kids wear",
    image: ProductListImage.kidswear1,
    price: 900,
    size: "1-3 YEAR",
  },
  {
    id: 9,
    label: "Kids wear",
    image: ProductListImage.kidswear2,
    price: 900,
    size: "3-9 YEAR",
  },
  {
    id: 10,
    label: "Kids wear",
    image: ProductListImage.kidswear3,
    price: 900,
    size: "1-4 YEAR",
  },
  {
    id: 11,
    label: "Kids wear",
    image: ProductListImage.kidswear4,
    price: 900,
    size: "10-12 YEAR",
  },
  {
    id: 12,
    label: "Footwear",
    image: ProductListImage.footwear1,
    price: 999,
    size: "7",
  },
  {
    id: 12,
    label: "Footwear",
    image: ProductListImage.footwear2,
    price: 999,
    size: "5",
  },
  {
    id: 12,
    label: "Footwear",
    image: ProductListImage.footwear3,
    price: 999,
    size: "6",
  },
  {
    id: 12,
    label: "Footwear",
    image: ProductListImage.footwear4,
    price: 999,
    size: "9",
  },
  {
    id: 13,
    label: "Jewelary",
    image: ProductListImage.cosmatics1,
    price: 2009,
  },
  {
    id: 14,
    label: "Jewelary",
    image: ProductListImage.cosmatics2,
    price: 2009,
  },
  {
    id: 15,
    label: "Jewelary",
    image: ProductListImage.cosmatics3,
    price: 2009,
  },
  {
    id: 16,
    label: "Jewelary",
    image: ProductListImage.cosmatics4,
    price: 2009,
  },
  {
    id: 17,
    label: "HomeAppliance",
    image: ProductListImage.Homeappliance1,
    price: 2009,
  },
  {
    id: 17,
    label: "HomeAppliance",
    image: ProductListImage.Homeappliance2,
    price: 2009,
  },
  {
    id: 17,
    label: "HomeAppliance",
    image: ProductListImage.Homeappliance3,
    price: 2009,
  },
  {
    id: 17,
    label: "HomeAppliance",
    image: ProductListImage.Homeappliance4,
    price: 2009,
  },
];

export {
  iconSidebar2,
  iconSidebar,
  icon,
  HomeSliderImages,
  CardDataHome,
  ProductListData,
  drawerWidth,
};
