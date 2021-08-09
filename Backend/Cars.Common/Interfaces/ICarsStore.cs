using Cars.Store.Context;
using System;
using System.Threading.Tasks;

namespace Cars.Common
{
    public interface ICarsStore
    {
        Task<IEquatable<Car>> Get();
    }
}
