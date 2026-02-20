---
layout: post
title: "洹몃옒???뚭퀬由ъ쬁: ?곌껐???곗씠?곗쓽 ?먯깋怨?遺꾩꽍"
date:   2025-01-21 09:00:00 +0900
categories: ["IT", "?뚭퀬由ъ쬁"]
tags: ["?뚭퀬由ъ쬁", "洹몃옒?? BFS", "DFS", "理쒕떒寃쎈줈", "?꾩긽?뺣젹"]
description: "洹몃옒?꾩쓽 湲곕낯 媛쒕뀗怨?BFS/DFS, 理쒕떒 寃쎈줈 ?뚭퀬由ъ쬁??諛곗썎?덈떎."
---

# 洹몃옒???뚭퀬由ъ쬁: ?곌껐???곗씠?곗쓽 ?먯깋怨?遺꾩꽍

?꾩떎 ?멸퀎??留롮? 臾몄젣?ㅼ? **?곌껐??愿怨?*濡??쒗쁽?⑸땲?? ?뚯뀥 ?ㅽ듃?뚰겕??移쒓뎄 愿怨? ?꾨줈留앹쓽 援먯감濡??곌껐, ???섏씠吏??留곹겕 援ъ“ ?깆씠 紐⑤몢 洹몃옒?꾨줈 紐⑤뜽留곹븷 ???덉뒿?덈떎. ?대쾲 湲?먯꽌??洹몃옒?꾩쓽 湲곕낯 媛쒕뀗怨??듭떖 ?뚭퀬由ъ쬁?ㅼ쓣 ?뚯븘蹂닿쿋?듬땲??

## 1. 洹몃옒?꾩쓽 湲곗큹 媛쒕뀗

### 洹몃옒?꾩쓽 ?뺤쓽
**?뺤젏(Vertex/Node)**怨?**媛꾩꽑(Edge)**?쇰줈 援ъ꽦???먮즺 援ъ“?낅땲??

```
G = (V, E)
- V: ?뺤젏?ㅼ쓽 吏묓빀
- E: 媛꾩꽑?ㅼ쓽 吏묓빀
```

### 洹몃옒?꾩쓽 醫낅쪟

#### 1. 諛⑺뼢 洹몃옒??vs 臾대갑??洹몃옒??
- **臾대갑??洹몃옒??*: 媛꾩꽑??諛⑺뼢???놁쓬 (A-B? B-A媛 ?숈씪)
- **諛⑺뼢 洹몃옒??*: 媛꾩꽑??諛⑺뼢???덉쓬 (A?묪? B?묨媛 ?ㅻ쫫)

#### 2. 媛以?洹몃옒??vs 鍮꾧?以?洹몃옒??
- **鍮꾧?以?洹몃옒??*: 紐⑤뱺 媛꾩꽑??鍮꾩슜???숈씪
- **媛以?洹몃옒??*: 媛?媛꾩꽑??媛以묒튂(鍮꾩슜)媛 遺?щ맖

#### 3. ?⑥닚 洹몃옒??vs ?ㅼ쨷 洹몃옒??
- **?⑥닚 洹몃옒??*: ???뺤젏 ?ъ씠??理쒕? ?섎굹??媛꾩꽑
- **?ㅼ쨷 洹몃옒??*: ???뺤젏 ?ъ씠???щ윭 媛쒖쓽 媛꾩꽑 媛??

### 洹몃옒???쒗쁽 諛⑸쾿

#### 1. ?몄젒 ?됰젹 (Adjacency Matrix)
```python
# 臾대갑??洹몃옒??
graph = [
    [0, 1, 1, 0],  # ?뺤젏 0???곌껐
    [1, 0, 1, 1],  # ?뺤젏 1???곌껐
    [1, 1, 0, 0],  # ?뺤젏 2???곌껐
    [0, 1, 0, 0]   # ?뺤젏 3???곌껐
]

# 諛⑺뼢 媛以?洹몃옒??
weighted_graph = [
    [0, 3, 8, 0],   # 0??: 3, 0??: 8
    [0, 0, 0, 1],   # 1??: 1
    [0, 4, 0, 0],   # 2??: 4
    [0, 0, 2, 0]    # 3??: 2
]
```

**?μ젏**: 媛꾩꽑 議댁옱 ?щ? ?뺤씤??O(1)
**?⑥젏**: 怨듦컙 蹂듭옟??O(V짼), 諛吏?洹몃옒?꾩뿉 ?곹빀

#### 2. ?몄젒 由ъ뒪??(Adjacency List)
```python
# 臾대갑??洹몃옒??
graph = {
    0: [1, 2],
    1: [0, 2, 3],
    2: [0, 1],
    3: [1]
}

# 媛以?洹몃옒??
weighted_graph = {
    0: [(1, 3), (2, 8)],    # (?댁썐, 媛以묒튂)
    1: [(3, 1)],
    2: [(1, 4)],
    3: [(2, 2)]
}
```

**?μ젏**: 怨듦컙 蹂듭옟??O(V + E), ?ъ냼 洹몃옒?꾩뿉 ?곹빀
**?⑥젏**: 媛꾩꽑 議댁옱 ?щ? ?뺤씤??O(degree)

## 2. 洹몃옒???쒗쉶 ?뚭퀬由ъ쬁

### ?덈퉬 ?곗꽑 ?먯깋 (Breadth-First Search, BFS)

**?먮━**: 媛源뚯슫 ?뺤젏遺???쒖꽌?濡?諛⑸Ц?⑸땲?? ??Queue)瑜??ъ슜?⑸땲??

```python
from collections import deque

def bfs(graph, start):
    """
    BFS 援ы쁽

    Args:
        graph (dict): ?몄젒 由ъ뒪?몃줈 ?쒗쁽??洹몃옒??
        start (int): ?쒖옉 ?뺤젏

    Returns:
        list: 諛⑸Ц???뺤젏?ㅼ쓽 ?쒖꽌
    """
    visited = set()
    queue = deque([start])
    visited.add(start)
    order = []

    while queue:
        vertex = queue.popleft()
        order.append(vertex)

        # ?몄젒 ?뺤젏?ㅼ쓣 ?먯뿉 異붽?
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return order

# ?뚯뒪??
graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 4],
    3: [1, 5],
    4: [1, 2, 5],
    5: [3, 4]
}

print("BFS ?쒗쉶:", bfs(graph, 0))  # [0, 1, 2, 3, 4, 5]
```

**?쒓컙 蹂듭옟??*: O(V + E)
**怨듦컙 蹂듭옟??*: O(V)

### 源딆씠 ?곗꽑 ?먯깋 (Depth-First Search, DFS)

**?먮━**: ??諛⑺뼢?쇰줈 理쒕???源딆씠 ?먯깋?????뚯븘?듬땲?? ?ㅽ깮(Stack)?대굹 ?ш?瑜??ъ슜?⑸땲??

```python
def dfs_recursive(graph, vertex, visited=None, order=None):
    """
    ?ш?瑜??ъ슜??DFS

    Args:
        graph (dict): ?몄젒 由ъ뒪??洹몃옒??
        vertex (int): ?꾩옱 ?뺤젏
        visited (set): 諛⑸Ц???뺤젏 吏묓빀
        order (list): 諛⑸Ц ?쒖꽌

    Returns:
        list: 諛⑸Ц ?쒖꽌
    """
    if visited is None:
        visited = set()
    if order is None:
        order = []

    visited.add(vertex)
    order.append(vertex)

    for neighbor in graph[vertex]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited, order)

    return order

def dfs_iterative(graph, start):
    """
    ?ㅽ깮???ъ슜??DFS

    Args:
        graph (dict): ?몄젒 由ъ뒪??洹몃옒??
        start (int): ?쒖옉 ?뺤젏

    Returns:
        list: 諛⑸Ц ?쒖꽌
    """
    visited = set()
    stack = [start]
    order = []

    while stack:
        vertex = stack.pop()

        if vertex not in visited:
            visited.add(vertex)
            order.append(vertex)

            # ??닚?쇰줈 ?ㅽ깮??異붽? (DFS瑜??꾪빐)
            for neighbor in reversed(graph[vertex]):
                if neighbor not in visited:
                    stack.append(neighbor)

    return order

# ?뚯뒪??
graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 4],
    3: [1, 5],
    4: [1, 2, 5],
    5: [3, 4]
}

print("DFS (?ш?):", dfs_recursive(graph, 0))    # [0, 1, 3, 5, 4, 2]
print("DFS (諛섎났):", dfs_iterative(graph, 0))    # [0, 2, 4, 5, 3, 1]
```

**?쒓컙 蹂듭옟??*: O(V + E)
**怨듦컙 蹂듭옟??*: O(V)

### BFS vs DFS 鍮꾧탳

| 痢〓㈃ | BFS | DFS |
|------|-----|-----|
| ?먮즺援ъ“ | ??| ?ㅽ깮/?ш? |
| ?먯깋 ?쒖꽌 | ?덈꺼蹂?| 源딆씠 ?곗꽑 |
| 理쒕떒 寃쎈줈 | 蹂댁옣 | 遺덈낫??|
| 硫붾え由?| ??留롮씠 ?ъ슜 | ?곴쾶 ?ъ슜 |
| ?묒슜 | 理쒕떒 寃쎈줈 | ?꾩긽 ?뺣젹 |

## 3. 理쒕떒 寃쎈줈 ?뚭퀬由ъ쬁

### ?ㅼ씡?ㅽ듃???뚭퀬由ъ쬁 (Dijkstra's Algorithm)

**?먮━**: ?쒖옉 ?뺤젏?쇰줈遺???ㅻⅨ 紐⑤뱺 ?뺤젏源뚯???理쒕떒 寃쎈줈瑜?李얠뒿?덈떎. 洹몃━???뚭퀬由ъ쬁?낅땲??

```python
import heapq

def dijkstra(graph, start):
    """
    ?ㅼ씡?ㅽ듃???뚭퀬由ъ쬁 援ы쁽

    Args:
        graph (dict): 媛以?洹몃옒??{?뺤젏: [(?댁썐, 媛以묒튂), ...]}
        start (int): ?쒖옉 ?뺤젏

    Returns:
        dict: 媛??뺤젏源뚯???理쒕떒 嫄곕━
        dict: 理쒕떒 寃쎈줈 ?몃━ (?댁쟾 ?뺤젏)
    """
    distances = {node: float('inf') for node in graph}
    distances[start] = 0

    previous = {node: None for node in graph}

    pq = [(0, start)]  # (嫄곕━, ?뺤젏)

    while pq:
        current_distance, current_node = heapq.heappop(pq)

        # ?대? 泥섎━???몃뱶?쇰㈃ ?ㅽ궢
        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node]:
            distance = current_distance + weight

            # ??吏㏃? 寃쎈줈瑜?諛쒓껄?섎㈃ ?낅뜲?댄듃
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                previous[neighbor] = current_node
                heapq.heappush(pq, (distance, neighbor))

    return distances, previous

def reconstruct_path(previous, start, end):
    """理쒕떒 寃쎈줈 ?ш뎄??""
    path = []
    current = end

    while current is not None:
        path.append(current)
        current = previous[current]

    path.reverse()
    return path if path[0] == start else []

# ?뚯뒪??
graph = {
    0: [(1, 4), (2, 1)],
    1: [(0, 4), (2, 2), (3, 5)],
    2: [(0, 1), (1, 2), (3, 8), (4, 10)],
    3: [(1, 5), (2, 8), (4, 2)],
    4: [(2, 10), (3, 2)]
}

distances, previous = dijkstra(graph, 0)
print("理쒕떒 嫄곕━:", distances)
print("寃쎈줈 0??:", reconstruct_path(previous, 0, 4))
```

**?쒓컙 蹂듭옟??*: O((V + E) log V) (?곗꽑?쒖쐞 ???ъ슜)
**?쒖빟 議곌굔**: 媛以묒튂媛 ?뚯닔媛 ?꾨땲?댁빞 ??

### 踰⑤쭔-?щ뱶 ?뚭퀬由ъ쬁 (Bellman-Ford Algorithm)

**?먮━**: ?뚯닔 媛以묒튂媛 ?덈뒗 洹몃옒?꾩뿉?쒕룄 理쒕떒 寃쎈줈瑜?李얠쓣 ???덉뒿?덈떎.

```python
def bellman_ford(graph, start, num_vertices):
    """
    踰⑤쭔-?щ뱶 ?뚭퀬由ъ쬁

    Args:
        graph (list): [(?쒖옉, ?? 媛以묒튂), ...] ?뺥깭??媛꾩꽑 由ъ뒪??
        start (int): ?쒖옉 ?뺤젏
        num_vertices (int): ?뺤젏 媛쒖닔

    Returns:
        dict: 理쒕떒 嫄곕━, ?뚯닔 ?ъ씠??議댁옱 ?щ?
    """
    distances = {node: float('inf') for node in range(num_vertices)}
    distances[start] = 0

    # V-1踰?諛섎났
    for _ in range(num_vertices - 1):
        for u, v, weight in graph:
            if distances[u] != float('inf') and distances[u] + weight < distances[v]:
                distances[v] = distances[u] + weight

    # ?뚯닔 ?ъ씠??寃異?
    has_negative_cycle = False
    for u, v, weight in graph:
        if distances[u] != float('inf') and distances[u] + weight < distances[v]:
            has_negative_cycle = True
            break

    return distances, has_negative_cycle

# ?뚯뒪??(?뚯닔 媛以묒튂 ?ы븿)
edges = [
    (0, 1, 4), (0, 2, 1),
    (1, 2, 2), (1, 3, 5),
    (2, 3, -8), (3, 4, 2)  # ?뚯닔 媛以묒튂
]

distances, has_cycle = bellman_ford(edges, 0, 5)
print("理쒕떒 嫄곕━:", distances)
print("?뚯닔 ?ъ씠??議댁옱:", has_cycle)
```

**?쒓컙 蹂듭옟??*: O(V 횞 E)
**?μ젏**: ?뚯닔 媛以묒튂 ?덉슜

### ?뚮줈?대뱶-?뚯뀥 ?뚭퀬由ъ쬁 (Floyd-Warshall Algorithm)

**?먮━**: 紐⑤뱺 ?뺤젏 ??媛꾩쓽 理쒕떒 寃쎈줈瑜?援ы빀?덈떎.

```python
def floyd_warshall(graph, num_vertices):
    """
    ?뚮줈?대뱶-?뚯뀥 ?뚭퀬由ъ쬁

    Args:
        graph (list): 2D 嫄곕━ ?됰젹
        num_vertices (int): ?뺤젏 媛쒖닔

    Returns:
        list: 紐⑤뱺 ?뺤젏 ??媛?理쒕떒 嫄곕━ ?됰젹
    """
    # 嫄곕━ ?됰젹 蹂듭궗
    dist = [row[:] for row in graph]

    # k: 寃쎌쑀?????덈뒗 ?뺤젏??
    for k in range(num_vertices):
        # i: 異쒕컻 ?뺤젏
        for i in range(num_vertices):
            # j: ?꾩갑 ?뺤젏
            for j in range(num_vertices):
                if (dist[i][k] != float('inf') and
                    dist[k][j] != float('inf') and
                    dist[i][k] + dist[k][j] < dist[i][j]):
                    dist[i][j] = dist[i][k] + dist[k][j]

    return dist

# ?뚯뒪??
INF = float('inf')
graph = [
    [0, 3, INF, 7],
    [8, 0, 2, INF],
    [5, INF, 0, 1],
    [2, INF, INF, 0]
]

result = floyd_warshall(graph, 4)
print("紐⑤뱺 ?뺤젏 ??理쒕떒 嫄곕━:")
for row in result:
    print([x if x != INF else "INF" for x in row])
```

**?쒓컙 蹂듭옟??*: O(V쨀)
**?μ젏**: 紐⑤뱺 ?뺤젏 ??寃쎈줈 怨꾩궛

## 4. 理쒖냼 ?좎옣 ?몃━ (Minimum Spanning Tree)

### ?щ（?ㅼ뭡 ?뚭퀬由ъ쬁 (Kruskal's Algorithm)

```python
def kruskal_mst(edges, num_vertices):
    """
    ?щ（?ㅼ뭡 ?뚭퀬由ъ쬁?쇰줈 MST 援ы븯湲?

    Args:
        edges (list): [(媛以묒튂, ?뺤젏1, ?뺤젏2), ...]
        num_vertices (int): ?뺤젏 媛쒖닔

    Returns:
        list: MST瑜?援ъ꽦?섎뒗 媛꾩꽑??
    """
    # 媛꾩꽑?ㅼ쓣 媛以묒튂 湲곗??쇰줈 ?뺣젹
    edges.sort()

    parent = list(range(num_vertices))
    rank = [0] * num_vertices
    mst = []
    total_weight = 0

    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])  # 寃쎈줈 ?뺤텞
        return parent[x]

    def union(x, y):
        px, py = find(x), find(y)
        if px != py:
            if rank[px] < rank[py]:
                parent[px] = py
            elif rank[px] > rank[py]:
                parent[py] = px
            else:
                parent[py] = px
                rank[px] += 1

    for weight, u, v in edges:
        if find(u) != find(v):
            union(u, v)
            mst.append((u, v, weight))
            total_weight += weight

    return mst, total_weight

# ?뚯뒪??
edges = [
    (7, 0, 1), (5, 0, 3), (8, 1, 2), (9, 1, 3),
    (7, 1, 4), (5, 2, 4), (15, 3, 4), (6, 4, 5),
    (8, 2, 5), (9, 3, 5), (11, 4, 5)
]

mst, weight = kruskal_mst(edges, 6)
print("理쒖냼 ?좎옣 ?몃━:")
for u, v, w in mst:
    print(f"媛꾩꽑 ({u}, {v}): 媛以묒튂 {w}")
print(f"珥?媛以묒튂: {weight}")
```

## 5. ?꾩긽 ?뺣젹 (Topological Sort)

**?먮━**: 諛⑺뼢 洹몃옒?꾩뿉???뺤젏?ㅼ쓣 ?좏뻾 愿怨꾨? ?좎??섎ŉ ?쒖꽌?濡??섏뿴?⑸땲??

```python
from collections import deque

def topological_sort(graph, num_vertices):
    """
    ?꾩긽 ?뺣젹 援ы쁽 (Kahn's Algorithm)

    Args:
        graph (dict): ?몄젒 由ъ뒪??洹몃옒??
        num_vertices (int): ?뺤젏 媛쒖닔

    Returns:
        list: ?꾩긽 ?뺣젹???쒖꽌 (?ъ씠?댁씠 ?덉쑝硫?None)
    """
    # 吏꾩엯 李⑥닔 怨꾩궛
    in_degree = [0] * num_vertices
    for neighbors in graph.values():
        for neighbor in neighbors:
            in_degree[neighbor] += 1

    # 吏꾩엯 李⑥닔媛 0???뺤젏?ㅼ쓣 ?먯뿉 ?쎌엯
    queue = deque([i for i in range(num_vertices) if in_degree[i] == 0])
    result = []

    while queue:
        vertex = queue.popleft()
        result.append(vertex)

        # ?댁썐 ?뺤젏?ㅼ쓽 吏꾩엯 李⑥닔 媛먯냼
        if vertex in graph:
            for neighbor in graph[vertex]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)

    # ?ъ씠??寃異?
    if len(result) != num_vertices:
        return None  # ?ъ씠??議댁옱

    return result

# ?뚯뒪??(怨쇰ぉ ?좎닔 吏??洹몃옒??
graph = {
    0: [1, 2],    # ?꾨줈洹몃옒諛????뚭퀬由ъ쬁, ?먮즺援ъ“
    1: [3],       # ?뚭퀬由ъ쬁 ??怨좉툒 ?뚭퀬由ъ쬁
    2: [3],       # ?먮즺援ъ“ ??怨좉툒 ?뚭퀬由ъ쬁
    3: [],        # 怨좉툒 ?뚭퀬由ъ쬁 (醫낅즺)
    4: [0]        # ?섑븰 ???꾨줈洹몃옒諛?
}

order = topological_sort(graph, 5)
if order:
    subjects = ["?섑븰", "?꾨줈洹몃옒諛?, "?뚭퀬由ъ쬁", "?먮즺援ъ“", "怨좉툒?뚭퀬由ъ쬁"]
    print("?숈뒿 ?쒖꽌:")
    for idx in order:
        print(f"{idx+1}. {subjects[idx]}")
else:
    print("?ъ씠?댁씠 議댁옱?⑸땲??")
```

## 6. 洹몃옒???뚭퀬由ъ쬁???묒슜 遺꾩빞

### 1. ?ㅽ듃?뚰겕 ?쇱슦??
- 理쒕떒 寃쎈줈 ?뚭퀬由ъ쬁?쇰줈 ?곗씠???⑦궥 ?꾩넚 寃쎈줈 寃곗젙

### 2. ?뚯뀥 ?ㅽ듃?뚰겕 遺꾩꽍
- BFS濡?移쒓뎄 異붿쿇, DFS濡?而ㅻ??덊떚 ?먯?

### 3. ?섏〈???닿껐
- ?꾩긽 ?뺣젹濡?而댄뙆???쒖꽌 寃곗젙, ?⑦궎吏 ?ㅼ튂 ?쒖꽌 寃곗젙

### 4. 寃뚯엫 媛쒕컻
- 湲?李얘린 ?뚭퀬由ъ쬁, ?곹깭 怨듦컙 ?먯깋

### 5. ???щ·留?
- 洹몃옒???쒗쉶濡????섏씠吏 ?먯깋

## 7. ?곗뒿 臾몄젣

1. ?ㅼ쓬 洹몃옒?꾩뿉??BFS? DFS??諛⑸Ц ?쒖꽌瑜?媛곴컖 援ы븯?몄슂:
```
A ? B ? D
??  ??
C ? E
```

2. ?ㅼ씡?ㅽ듃???뚭퀬由ъ쬁怨?踰⑤쭔-?щ뱶 ?뚭퀬由ъ쬁??李⑥씠?먯쓣 ?ㅻ챸?섏꽭??

3. ?꾩긽 ?뺣젹???꾩슂???ㅻТ ?щ?瑜?2媛吏 ?댁긽 ?ㅼ뼱蹂댁꽭??

4. 理쒖냼 ?좎옣 ?몃━媛 ?꾩슂??寃쎌슦???몄젣?멸???

## 留덈Т由?

洹몃옒???뚭퀬由ъ쬁? ?꾨? 而댄벂?낆쓽 ?듭떖?낅땲?? ?곌껐???곗씠?곗쓽 ?먯깋, 理쒖쟻 寃쎈줈 李얘린, ?섏〈??遺꾩꽍 ???ㅼ뼇??遺꾩빞?먯꽌 ?꾩닔?곸엯?덈떎.

**?듭떖 ?붿빟:**
- 洹몃옒??= ?뺤젏(V) + 媛꾩꽑(E)
- ?쒗쁽: ?몄젒 ?됰젹 O(V짼), ?몄젒 由ъ뒪??O(V+E)
- BFS: ?먮줈 ?덈꺼蹂??먯깋, 理쒕떒 寃쎈줈 蹂댁옣
- DFS: ?ㅽ깮?쇰줈 源딆씠 ?곗꽑 ?먯깋, 寃쎈줈 ?먯깋???좎슜
- 理쒕떒 寃쎈줈: ?ㅼ씡?ㅽ듃???묒닔), 踰⑤쭔-?щ뱶(?뚯닔), ?뚮줈?대뱶-?뚯뀥(紐⑤뱺 ??
- ?ㅼ쟾 ?묒슜: ?ㅽ듃?뚰겕, ?뚯뀥 洹몃옒?? ?섏〈??遺꾩꽍

?ㅼ쓬 湲?먯꽌??**怨좉툒 ?먮즺援ъ“? ?뚭퀬由ъ쬁**??????뚯븘蹂닿쿋?듬땲?? ?ㅼ쟾 ?쒖뒪?쒖뿉???ъ슜?섎뒗 ?⑥쑉?곸씤 ?먮즺援ъ“?ㅼ쓣 諛곗썙蹂닿쿋?듬땲??

**異붽? ??** 洹몃옒??臾몄젣瑜?? ?뚮뒗 癒쇱? 洹몃옒?꾨? ?대뼸寃??쒗쁽?좎? 怨좊??섏꽭?? ?몄젒 由ъ뒪?멸? ?遺遺꾩쓽 寃쎌슦???⑥쑉?곸엯?덈떎! ?빖截륆윍?
