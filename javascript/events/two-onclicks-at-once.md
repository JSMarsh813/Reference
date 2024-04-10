https://stackoverflow.com/questions/68380457/setting-two-state-variable-onclick-in-react

```
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
export default function Header() {
    ...
    ....
 const [userClicked, setUserClicked] = useState(false);
  const [open, setOpen] = useState(true);
  ...
  ...
  return (
    ....
  <button
        onClick={() => {
          setOpen(true);
          setUserClicked(true);
        }}
  )
  />
}
```

originally I had tried to use && aka setOpen(true)&&setUserClicked(true)
however, that naturally was causing short-circuit evaluation.

I could instead just wrap the both in { } and use ; between them, so the setState functions both operate without effecting eachother
