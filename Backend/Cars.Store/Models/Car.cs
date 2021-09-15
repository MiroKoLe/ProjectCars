using System;
using System.Collections.Generic;

#nullable disable

namespace Cars.Store.Context
{
    public partial class Car
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public DateTime Date { get; set; }
    }
}
