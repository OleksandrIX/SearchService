### Filter options:
&#x2714;
&#x2718;

- [x] order status
- [ ] region
- [x] price (order price and minimal step)
- [ ] dates
- [ ] cargo type

### Possible filter options

- [ ] weight (cargo) (_general for ordering?_)
- [ ] volume (cargo) (_general for ordering?_)
- [ ] passengers capacity (cargo)
- [ ] dimension [h, w, l] (cargo) (_general for ordering?_)

### Search by field

- [x] title (order)
- [x] description (order)
- [ ] title (cargo)
- [ ] description (cargo)

### _**Search or filter order requirements?**_

### SSL

- **Paste your ssl keys and certificates into the ssl directory**

### Example http request with query parameters

- https://localhost:9099/api/v1/orders?satus=new
- https://localhost:9099/api/v1/orders?satus=new&rangePrice[start]=100&rangePrice[end]=10000
- https://localhost:9099/api/v1/orders?satus=new&rangePrice[start]=100&rangePrice[end]=10000&rangeMinimalStep[start]=1&rangeMinimalStep[end]=100

#### Example in the form of a json

```json
{
    "status": "string", 
    // ["new", "receiving_proposals", "pending_tender", "tender_completed", "closed", "canceled"]
    "rangePrice": {
        "start": "number",
        "end": "number"
    },
    "rangeMinimalStep": {
        "start": "number",
        "end": "number"
    }
}
```

