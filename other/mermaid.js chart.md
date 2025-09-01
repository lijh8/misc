- Put text after its node or link; no spaces between text and its node or link.
- end can be text; id alternatives: End, END, endnode, finish, close, exit.
- No id or text like -o-, -x-; use capital -O-, -X-, or spaces - o -, - x -.
- Arrow on single left side of a link is invalid.
- Chain sequential links on one line; put parallel links on separate lines.
- Similar diagram tools: graphviz (dot), yED, draw.io, visio.

```mermaid
---
title: Flow Chart
---
flowchart
    %% chain sequential links on one line
    start --> input --> check{check}

    %% parallel links on separate lines
    check --x|foo| foo --> finish
    check -->|err| err --> finish
    check -->|no| finish
    check -->|ok| bar[do something] --> finish

    conf --> bar --> output
    deps --> bar

    %% use an unconnected node for adding text lines
    d1["
    Note:
    . drop the input foo which is unplanned right now
    . config it before start
    . fully static deps
    "]:::c1
    classDef c1 text-align:left

```
