const menu = [
  {
    id: 1,
    label: "Dashboard",
  },
  {
    id: 2,
    label: "E-Commerce",
    children: [
      {
        id: 21,
        label: "Products",
        children: [
          {
            id: 211,
            label: "Electronics",
            children: [
              {
                id: 2111,
                label: "Mobiles",
                children: [
                  { id: 21111, label: "Apple" },
                  { id: 21112, label: "Samsung" },
                  { id: 21113, label: "OnePlus" },
                  { id: 21114, label: "Google Pixel" }
                ]
              },
              {
                id: 2112,
                label: "Laptops",
                children: [
                  { id: 21121, label: "Dell" },
                  { id: 21122, label: "HP" },
                  { id: 21123, label: "Lenovo" },
                  { id: 21124, label: "MacBook" }
                ]
              },
              {
                id: 2113,
                label: "Accessories",
                children: [
                  { id: 21131, label: "Mouse" },
                  { id: 21132, label: "Keyboard" },
                  { id: 21133, label: "Headphones" }
                ]
              }
            ]
          },
          {
            id: 212,
            label: "Fashion",
            children: [
              {
                id: 2121,
                label: "Men",
                children: [
                  { id: 21211, label: "Shirts" },
                  { id: 21212, label: "Jeans" },
                  { id: 21213, label: "Shoes" }
                ]
              },
              {
                id: 2122,
                label: "Women",
                children: [
                  { id: 21221, label: "Dresses" },
                  { id: 21222, label: "Handbags" },
                  { id: 21223, label: "Footwear" }
                ]
              }
            ]
          },
          {
            id: 213,
            label: "Home & Kitchen",
            children: [
              { id: 2131, label: "Furniture" },
              { id: 2132, label: "Kitchen Appliances" },
              { id: 2133, label: "Home Decor" }
            ]
          }
        ]
      },
      {
        id: 22,
        label: "Orders",
        children: [
          { id: 221, label: "Pending" },
          { id: 222, label: "Processing" },
          { id: 223, label: "Delivered" },
          { id: 224, label: "Cancelled" },
          { id: 225, label: "Returns" }
        ]
      },
      {
        id: 23,
        label: "Customers",
        children: [
          { id: 231, label: "All Customers" },
          { id: 232, label: "Premium Members" },
          { id: 233, label: "Blocked Users" }
        ]
      }
    ]
  },
  {
    id: 3,
    label: "Analytics",
    children: [
      {
        id: 31,
        label: "Sales",
        children: [
          { id: 311, label: "Daily" },
          { id: 312, label: "Weekly" },
          { id: 313, label: "Monthly" },
          { id: 314, label: "Yearly" }
        ]
      },
      {
        id: 32,
        label: "Traffic",
        children: [
          { id: 321, label: "Visitors" },
          { id: 322, label: "Page Views" },
          { id: 323, label: "Bounce Rate" }
        ]
      }
    ]
  },
  {
    id: 4,
    label: "User Management",
    children: [
      {
        id: 41,
        label: "Roles",
        children: [
          { id: 411, label: "Admin" },
          { id: 412, label: "Manager" },
          { id: 413, label: "Customer" }
        ]
      },
      {
        id: 42,
        label: "Permissions",
        children: [
          { id: 421, label: "Read" },
          { id: 422, label: "Write" },
          { id: 423, label: "Delete" }
        ]
      }
    ]
  },
  {
    id: 5,
    label: "Settings",
    children: [
      {
        id: 51,
        label: "General",
        children: [
          { id: 511, label: "Profile" },
          { id: 512, label: "Language" },
          { id: 513, label: "Theme" }
        ]
      },
      {
        id: 52,
        label: "Security",
        children: [
          { id: 521, label: "Password" },
          { id: 522, label: "Two Factor Authentication" },
          { id: 523, label: "Sessions" }
        ]
      },
      {
        id: 53,
        label: "Notifications",
        children: [
          { id: 531, label: "Email" },
          { id: 532, label: "SMS" },
          { id: 533, label: "Push Notifications" }
        ]
      }
    ]
  }
];
export default menu;