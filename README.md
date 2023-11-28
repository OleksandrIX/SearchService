### Filter options:

- order status
- region
- price (order price and minimal step)
- dates
- cargo type

### Possible filter options

- weight (cargo) (_general for ordering?_)
- volume (cargo) (_general for ordering?_)
- passengers capacity (cargo)
- dimension [h, w, l] (cargo) (_general for ordering?_)

### Search by field

- title (order)
- description (order)
- title (cargo)
- description (cargo)

### _**Search or filter order requirements?**_

### SSL

- **Paste your ssl keys and certificates into the ssl directory**

### Example http request with query parameters

- https://localhost:9099/api/v1/orders?satus=new
- https://localhost:9099/api/v1/orders?satus=new&range-price[start]=100&range-price[end]=10000
- https://localhost:9099/api/v1/orders?satus=new&range-price[start]=100&range-price[end]=10000&range-minimal-step[start]=1&range-minimal-step[end]=100

#### Example in the form of a json

```json
{
    "status": "string",
    // ["new", "receiving_proposals", "pending_tender", "tender_completed", "closed", "canceled"]
    "range-price": {
        "start": "number",
        "end": "number"
    },
    "range-minimal-step": {
        "start": "number",
        "end": "number"
    }
}
```

