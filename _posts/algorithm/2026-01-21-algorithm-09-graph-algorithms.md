---
layout: post
title:  "그래프 알고리즘: 연결된 데이터의 탐색과 분석"
date:   2025-02-20 09:00:00 +0900
categories: [IT, 알고리즘]
tags: [알고리즘, 그래프, BFS, DFS, 최단경로, 위상정렬]
description: "그래프의 기본 개념과 BFS/DFS, 최단 경로 알고리즘을 배웁니다."
---

# 그래프 알고리즘: 연결된 데이터의 탐색과 분석

현실 세계의 많은 문제들은 **연결된 관계**로 표현됩니다. 소셜 네트워크의 친구 관계, 도로망의 교차로 연결, 웹 페이지의 링크 구조 등이 모두 그래프로 모델링할 수 있습니다. 이번 글에서는 그래프의 기본 개념과 핵심 알고리즘들을 알아보겠습니다.

## 1. 그래프의 기초 개념

### 그래프의 정의
**정점(Vertex/Node)**과 **간선(Edge)**으로 구성된 자료 구조입니다.

```
G = (V, E)
- V: 정점들의 집합
- E: 간선들의 집합
```

### 그래프의 종류

#### 1. 방향 그래프 vs 무방향 그래프
- **무방향 그래프**: 간선에 방향이 없음 (A-B와 B-A가 동일)
- **방향 그래프**: 간선에 방향이 있음 (A→B와 B→A가 다름)

#### 2. 가중 그래프 vs 비가중 그래프
- **비가중 그래프**: 모든 간선의 비용이 동일
- **가중 그래프**: 각 간선에 가중치(비용)가 부여됨

#### 3. 단순 그래프 vs 다중 그래프
- **단순 그래프**: 두 정점 사이에 최대 하나의 간선
- **다중 그래프**: 두 정점 사이에 여러 개의 간선 가능

### 그래프 표현 방법

#### 1. 인접 행렬 (Adjacency Matrix)
```python
# 무방향 그래프
graph = [
    [0, 1, 1, 0],  # 정점 0의 연결
    [1, 0, 1, 1],  # 정점 1의 연결
    [1, 1, 0, 0],  # 정점 2의 연결
    [0, 1, 0, 0]   # 정점 3의 연결
]

# 방향 가중 그래프
weighted_graph = [
    [0, 3, 8, 0],   # 0→1: 3, 0→2: 8
    [0, 0, 0, 1],   # 1→3: 1
    [0, 4, 0, 0],   # 2→1: 4
    [0, 0, 2, 0]    # 3→2: 2
]
```

**장점**: 간선 존재 여부 확인이 O(1)
**단점**: 공간 복잡도 O(V²), 밀집 그래프에 적합

#### 2. 인접 리스트 (Adjacency List)
```python
# 무방향 그래프
graph = {
    0: [1, 2],
    1: [0, 2, 3],
    2: [0, 1],
    3: [1]
}

# 가중 그래프
weighted_graph = {
    0: [(1, 3), (2, 8)],    # (이웃, 가중치)
    1: [(3, 1)],
    2: [(1, 4)],
    3: [(2, 2)]
}
```

**장점**: 공간 복잡도 O(V + E), 희소 그래프에 적합
**단점**: 간선 존재 여부 확인이 O(degree)

## 2. 그래프 순회 알고리즘

### 너비 우선 탐색 (Breadth-First Search, BFS)

**원리**: 가까운 정점부터 순서대로 방문합니다. 큐(Queue)를 사용합니다.

```python
from collections import deque

def bfs(graph, start):
    """
    BFS 구현

    Args:
        graph (dict): 인접 리스트로 표현된 그래프
        start (int): 시작 정점

    Returns:
        list: 방문한 정점들의 순서
    """
    visited = set()
    queue = deque([start])
    visited.add(start)
    order = []

    while queue:
        vertex = queue.popleft()
        order.append(vertex)

        # 인접 정점들을 큐에 추가
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return order

# 테스트
graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 4],
    3: [1, 5],
    4: [1, 2, 5],
    5: [3, 4]
}

print("BFS 순회:", bfs(graph, 0))  # [0, 1, 2, 3, 4, 5]
```

**시간 복잡도**: O(V + E)
**공간 복잡도**: O(V)

### 깊이 우선 탐색 (Depth-First Search, DFS)

**원리**: 한 방향으로 최대한 깊이 탐색한 후 돌아옵니다. 스택(Stack)이나 재귀를 사용합니다.

```python
def dfs_recursive(graph, vertex, visited=None, order=None):
    """
    재귀를 사용한 DFS

    Args:
        graph (dict): 인접 리스트 그래프
        vertex (int): 현재 정점
        visited (set): 방문한 정점 집합
        order (list): 방문 순서

    Returns:
        list: 방문 순서
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
    스택을 사용한 DFS

    Args:
        graph (dict): 인접 리스트 그래프
        start (int): 시작 정점

    Returns:
        list: 방문 순서
    """
    visited = set()
    stack = [start]
    order = []

    while stack:
        vertex = stack.pop()

        if vertex not in visited:
            visited.add(vertex)
            order.append(vertex)

            # 역순으로 스택에 추가 (DFS를 위해)
            for neighbor in reversed(graph[vertex]):
                if neighbor not in visited:
                    stack.append(neighbor)

    return order

# 테스트
graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 4],
    3: [1, 5],
    4: [1, 2, 5],
    5: [3, 4]
}

print("DFS (재귀):", dfs_recursive(graph, 0))    # [0, 1, 3, 5, 4, 2]
print("DFS (반복):", dfs_iterative(graph, 0))    # [0, 2, 4, 5, 3, 1]
```

**시간 복잡도**: O(V + E)
**공간 복잡도**: O(V)

### BFS vs DFS 비교

| 측면 | BFS | DFS |
|------|-----|-----|
| 자료구조 | 큐 | 스택/재귀 |
| 탐색 순서 | 레벨별 | 깊이 우선 |
| 최단 경로 | 보장 | 불보장 |
| 메모리 | 더 많이 사용 | 적게 사용 |
| 응용 | 최단 경로 | 위상 정렬 |

## 3. 최단 경로 알고리즘

### 다익스트라 알고리즘 (Dijkstra's Algorithm)

**원리**: 시작 정점으로부터 다른 모든 정점까지의 최단 경로를 찾습니다. 그리디 알고리즘입니다.

```python
import heapq

def dijkstra(graph, start):
    """
    다익스트라 알고리즘 구현

    Args:
        graph (dict): 가중 그래프 {정점: [(이웃, 가중치), ...]}
        start (int): 시작 정점

    Returns:
        dict: 각 정점까지의 최단 거리
        dict: 최단 경로 트리 (이전 정점)
    """
    distances = {node: float('inf') for node in graph}
    distances[start] = 0

    previous = {node: None for node in graph}

    pq = [(0, start)]  # (거리, 정점)

    while pq:
        current_distance, current_node = heapq.heappop(pq)

        # 이미 처리된 노드라면 스킵
        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node]:
            distance = current_distance + weight

            # 더 짧은 경로를 발견하면 업데이트
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                previous[neighbor] = current_node
                heapq.heappush(pq, (distance, neighbor))

    return distances, previous

def reconstruct_path(previous, start, end):
    """최단 경로 재구성"""
    path = []
    current = end

    while current is not None:
        path.append(current)
        current = previous[current]

    path.reverse()
    return path if path[0] == start else []

# 테스트
graph = {
    0: [(1, 4), (2, 1)],
    1: [(0, 4), (2, 2), (3, 5)],
    2: [(0, 1), (1, 2), (3, 8), (4, 10)],
    3: [(1, 5), (2, 8), (4, 2)],
    4: [(2, 10), (3, 2)]
}

distances, previous = dijkstra(graph, 0)
print("최단 거리:", distances)
print("경로 0→4:", reconstruct_path(previous, 0, 4))
```

**시간 복잡도**: O((V + E) log V) (우선순위 큐 사용)
**제약 조건**: 가중치가 음수가 아니어야 함

### 벨만-포드 알고리즘 (Bellman-Ford Algorithm)

**원리**: 음수 가중치가 있는 그래프에서도 최단 경로를 찾을 수 있습니다.

```python
def bellman_ford(graph, start, num_vertices):
    """
    벨만-포드 알고리즘

    Args:
        graph (list): [(시작, 끝, 가중치), ...] 형태의 간선 리스트
        start (int): 시작 정점
        num_vertices (int): 정점 개수

    Returns:
        dict: 최단 거리, 음수 사이클 존재 여부
    """
    distances = {node: float('inf') for node in range(num_vertices)}
    distances[start] = 0

    # V-1번 반복
    for _ in range(num_vertices - 1):
        for u, v, weight in graph:
            if distances[u] != float('inf') and distances[u] + weight < distances[v]:
                distances[v] = distances[u] + weight

    # 음수 사이클 검출
    has_negative_cycle = False
    for u, v, weight in graph:
        if distances[u] != float('inf') and distances[u] + weight < distances[v]:
            has_negative_cycle = True
            break

    return distances, has_negative_cycle

# 테스트 (음수 가중치 포함)
edges = [
    (0, 1, 4), (0, 2, 1),
    (1, 2, 2), (1, 3, 5),
    (2, 3, -8), (3, 4, 2)  # 음수 가중치
]

distances, has_cycle = bellman_ford(edges, 0, 5)
print("최단 거리:", distances)
print("음수 사이클 존재:", has_cycle)
```

**시간 복잡도**: O(V × E)
**장점**: 음수 가중치 허용

### 플로이드-워셜 알고리즘 (Floyd-Warshall Algorithm)

**원리**: 모든 정점 쌍 간의 최단 경로를 구합니다.

```python
def floyd_warshall(graph, num_vertices):
    """
    플로이드-워셜 알고리즘

    Args:
        graph (list): 2D 거리 행렬
        num_vertices (int): 정점 개수

    Returns:
        list: 모든 정점 쌍 간 최단 거리 행렬
    """
    # 거리 행렬 복사
    dist = [row[:] for row in graph]

    # k: 경유할 수 있는 정점들
    for k in range(num_vertices):
        # i: 출발 정점
        for i in range(num_vertices):
            # j: 도착 정점
            for j in range(num_vertices):
                if (dist[i][k] != float('inf') and
                    dist[k][j] != float('inf') and
                    dist[i][k] + dist[k][j] < dist[i][j]):
                    dist[i][j] = dist[i][k] + dist[k][j]

    return dist

# 테스트
INF = float('inf')
graph = [
    [0, 3, INF, 7],
    [8, 0, 2, INF],
    [5, INF, 0, 1],
    [2, INF, INF, 0]
]

result = floyd_warshall(graph, 4)
print("모든 정점 쌍 최단 거리:")
for row in result:
    print([x if x != INF else "INF" for x in row])
```

**시간 복잡도**: O(V³)
**장점**: 모든 정점 쌍 경로 계산

## 4. 최소 신장 트리 (Minimum Spanning Tree)

### 크루스칼 알고리즘 (Kruskal's Algorithm)

```python
def kruskal_mst(edges, num_vertices):
    """
    크루스칼 알고리즘으로 MST 구하기

    Args:
        edges (list): [(가중치, 정점1, 정점2), ...]
        num_vertices (int): 정점 개수

    Returns:
        list: MST를 구성하는 간선들
    """
    # 간선들을 가중치 기준으로 정렬
    edges.sort()

    parent = list(range(num_vertices))
    rank = [0] * num_vertices
    mst = []
    total_weight = 0

    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])  # 경로 압축
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

# 테스트
edges = [
    (7, 0, 1), (5, 0, 3), (8, 1, 2), (9, 1, 3),
    (7, 1, 4), (5, 2, 4), (15, 3, 4), (6, 4, 5),
    (8, 2, 5), (9, 3, 5), (11, 4, 5)
]

mst, weight = kruskal_mst(edges, 6)
print("최소 신장 트리:")
for u, v, w in mst:
    print(f"간선 ({u}, {v}): 가중치 {w}")
print(f"총 가중치: {weight}")
```

## 5. 위상 정렬 (Topological Sort)

**원리**: 방향 그래프에서 정점들을 선행 관계를 유지하며 순서대로 나열합니다.

```python
from collections import deque

def topological_sort(graph, num_vertices):
    """
    위상 정렬 구현 (Kahn's Algorithm)

    Args:
        graph (dict): 인접 리스트 그래프
        num_vertices (int): 정점 개수

    Returns:
        list: 위상 정렬된 순서 (사이클이 있으면 None)
    """
    # 진입 차수 계산
    in_degree = [0] * num_vertices
    for neighbors in graph.values():
        for neighbor in neighbors:
            in_degree[neighbor] += 1

    # 진입 차수가 0인 정점들을 큐에 삽입
    queue = deque([i for i in range(num_vertices) if in_degree[i] == 0])
    result = []

    while queue:
        vertex = queue.popleft()
        result.append(vertex)

        # 이웃 정점들의 진입 차수 감소
        if vertex in graph:
            for neighbor in graph[vertex]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)

    # 사이클 검출
    if len(result) != num_vertices:
        return None  # 사이클 존재

    return result

# 테스트 (과목 선수 지식 그래프)
graph = {
    0: [1, 2],    # 프로그래밍 → 알고리즘, 자료구조
    1: [3],       # 알고리즘 → 고급 알고리즘
    2: [3],       # 자료구조 → 고급 알고리즘
    3: [],        # 고급 알고리즘 (종료)
    4: [0]        # 수학 → 프로그래밍
}

order = topological_sort(graph, 5)
if order:
    subjects = ["수학", "프로그래밍", "알고리즘", "자료구조", "고급알고리즘"]
    print("학습 순서:")
    for idx in order:
        print(f"{idx+1}. {subjects[idx]}")
else:
    print("사이클이 존재합니다!")
```

## 6. 그래프 알고리즘의 응용 분야

### 1. 네트워크 라우팅
- 최단 경로 알고리즘으로 데이터 패킷 전송 경로 결정

### 2. 소셜 네트워크 분석
- BFS로 친구 추천, DFS로 커뮤니티 탐지

### 3. 의존성 해결
- 위상 정렬로 컴파일 순서 결정, 패키지 설치 순서 결정

### 4. 게임 개발
- 길 찾기 알고리즘, 상태 공간 탐색

### 5. 웹 크롤링
- 그래프 순회로 웹 페이지 탐색

## 7. 연습 문제

1. 다음 그래프에서 BFS와 DFS의 방문 순서를 각각 구하세요:
```
A ─ B ─ D
│   │
C ─ E
```

2. 다익스트라 알고리즘과 벨만-포드 알고리즘의 차이점을 설명하세요.

3. 위상 정렬이 필요한 실무 사례를 2가지 이상 들어보세요.

4. 최소 신장 트리가 필요한 경우는 언제인가요?

## 마무리

그래프 알고리즘은 현대 컴퓨팅의 핵심입니다. 연결된 데이터의 탐색, 최적 경로 찾기, 의존성 분석 등 다양한 분야에서 필수적입니다.

**핵심 요약:**
- 그래프 = 정점(V) + 간선(E)
- 표현: 인접 행렬 O(V²), 인접 리스트 O(V+E)
- BFS: 큐로 레벨별 탐색, 최단 경로 보장
- DFS: 스택으로 깊이 우선 탐색, 경로 탐색에 유용
- 최단 경로: 다익스트라(양수), 벨만-포드(음수), 플로이드-워셜(모든 쌍)
- 실전 응용: 네트워크, 소셜 그래프, 의존성 분석

다음 글에서는 **고급 자료구조와 알고리즘**에 대해 알아보겠습니다. 실전 시스템에서 사용되는 효율적인 자료구조들을 배워보겠습니다!

**추가 팁:** 그래프 문제를 풀 때는 먼저 그래프를 어떻게 표현할지 고민하세요. 인접 리스트가 대부분의 경우에 효율적입니다! 🕸️🔍
