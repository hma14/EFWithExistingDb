﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EFWithExistingDb.DTO
{
    public class CategoryDto
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public byte[] Picture { get; set; }
    }
}