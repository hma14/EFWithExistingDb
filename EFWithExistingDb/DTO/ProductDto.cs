using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EFWithExistingDb.Models
{
    public class ProductDto
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public Decimal? UnitPrice { get; set; }
        public bool Discontinued { get; set; }

        public int? CategoryID { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
    }
}