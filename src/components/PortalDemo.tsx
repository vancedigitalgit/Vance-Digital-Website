"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

type Status = "New" | "Printed" | "Done";
type Channel = "Phone" | "Text" | "Email" | "Fax";

type Order = {
  id: string;
  customer: string;
  kind: string;
  items: number;
  time: string;
  channel: Channel;
  status: Status;
  arriving?: boolean;
  justUpdated?: boolean;
};

const INITIAL_ORDERS: Order[] = [
  { id: "ORD-1051", customer: "The Collective Café", kind: "Café / Restaurant", items: 4, time: "07:05 am", channel: "Phone", status: "New" },
  { id: "ORD-1050", customer: "Little Seeds Child Care", kind: "Child Care", items: 3, time: "06:30 am", channel: "Email", status: "New" },
  { id: "ORD-1049", customer: "Tweed Valley Primary School", kind: "School", items: 4, time: "06:15 am", channel: "Fax", status: "Printed" },
  { id: "ORD-1048", customer: "Burleigh Aged Care", kind: "Aged Care", items: 5, time: "05:50 am", channel: "Text", status: "Printed" },
  { id: "ORD-1047", customer: "Feast Catering Co.", kind: "Food Manufacturer", items: 4, time: "05:30 am", channel: "Email", status: "Done" },
  { id: "ORD-1046", customer: "The Anchor Hotel", kind: "Pub & Club", items: 6, time: "05:10 am", channel: "Phone", status: "Done" },
];

const INCOMING: Order[] = [
  { id: "ORD-1052", customer: "Cabarita Beach Resort", kind: "Resort / Hotel", items: 5, time: "07:12 am", channel: "Text", status: "New" },
  { id: "ORD-1053", customer: "Northern Rivers Meals on Wheels", kind: "Charity", items: 3, time: "07:18 am", channel: "Phone", status: "New" },
];

const TABS: ("All" | Status)[] = ["All", "New", "Printed", "Done"];

const STATUS_STYLES: Record<Status, string> = {
  New: "bg-[var(--color-accent-soft)] text-[#b8481a]",
  Printed: "bg-[var(--color-accent-blue-soft)] text-[var(--color-accent-blue)]",
  Done: "bg-[var(--color-accent-green-soft)] text-[var(--color-accent-green)]",
};

const NEXT_STATUS: Record<Status, Status | null> = {
  New: "Printed",
  Printed: "Done",
  Done: null,
};

const NEXT_LABEL: Record<Status, string | null> = {
  New: "Mark printed",
  Printed: "Mark done",
  Done: null,
};

type ProductCategory = "Vegetables" | "Herbs";

type CatalogueItem = {
  id: string;
  name: string;
  unit: string;
  category: ProductCategory;
};

const CATALOGUE: CatalogueItem[] = [
  { id: "roma-tomatoes", name: "Roma Tomatoes", unit: "per kg", category: "Vegetables" },
  { id: "iceberg-lettuce", name: "Iceberg Lettuce", unit: "per each", category: "Vegetables" },
  { id: "continental-cucumbers", name: "Continental Cucumbers", unit: "per each", category: "Vegetables" },
  { id: "salad-mix", name: "Salad Mix", unit: "per bag", category: "Vegetables" },
  { id: "fresh-basil", name: "Fresh Basil", unit: "per bunch", category: "Herbs" },
  { id: "coriander", name: "Coriander", unit: "per bunch", category: "Herbs" },
];

const CATEGORY_TABS: ("All" | ProductCategory)[] = ["All", "Vegetables", "Herbs"];

type AdminProduct = CatalogueItem & { active: boolean };

const INITIAL_ADMIN_PRODUCTS: AdminProduct[] = CATALOGUE.map((item) => ({
  ...item,
  active: item.id !== "coriander",
}));

type Customer = { id: string; name: string; kind: string };

const CUSTOMERS: Customer[] = [
  { id: "collective-cafe", name: "The Collective Café", kind: "Café / Restaurant" },
  { id: "little-seeds", name: "Little Seeds Child Care", kind: "Child Care" },
  { id: "tweed-valley", name: "Tweed Valley Primary School", kind: "School" },
  { id: "burleigh-aged-care", name: "Burleigh Aged Care", kind: "Aged Care" },
  { id: "feast-catering", name: "Feast Catering Co.", kind: "Food Manufacturer" },
  { id: "anchor-hotel", name: "The Anchor Hotel", kind: "Pub & Club" },
];

type Notice = { id: string; title: string; body: string };

const INITIAL_NOTICES: Notice[] = [
  { id: "notice-1", title: "Public holiday cutoff", body: "Orders close 2 hours early ahead of the public holiday." },
  { id: "notice-2", title: "Basil back in stock", body: "Fresh basil is back on the list after last week's shortage." },
];

type AdminPage = "dashboard" | "orders" | "products" | "customers" | "messages";

const NAV_ITEMS: { key: AdminPage; label: string; icon: React.ReactNode }[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    key: "orders",
    label: "Orders",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    key: "products",
    label: "Products",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
  },
  {
    key: "customers",
    label: "Customers",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    key: "messages",
    label: "Messages",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

const PAGE_TITLES: Record<AdminPage, string> = {
  dashboard: "Vance Portal, Dashboard",
  orders: "Vance Portal, Orders",
  products: "Vance Portal, Products",
  customers: "Vance Portal, Customers",
  messages: "Vance Portal, Messages",
};

type ClientPage = "shop" | "orders" | "notices";

const CLIENT_NAV_ITEMS: { key: ClientPage; label: string; icon: React.ReactNode }[] = [
  {
    key: "shop",
    label: "Order",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    key: "orders",
    label: "My Orders",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    key: "notices",
    label: "Notices",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

const CLIENT_PAGE_TITLES: Record<ClientPage, string> = {
  shop: "Vance Portal, Place an Order",
  orders: "Vance Portal, My Orders",
  notices: "Vance Portal, Notices",
};

type ClientOrder = { id: string; summary: string; time: string; status: "Submitted" };

const INITIAL_CLIENT_ORDERS: ClientOrder[] = [
  { id: "ORD-1044", summary: "3 items, roma tomatoes, lettuce, basil", time: "Yesterday, 08:40 am", status: "Submitted" },
];

function ClientProductRow({
  item,
  qtyInCart,
  onAdd,
}: {
  item: CatalogueItem;
  qtyInCart: number;
  onAdd: (qty: number) => void;
}) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <li className="flex flex-col gap-2 border-b border-[var(--color-line)] px-4 py-3.5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
      <div className="min-w-0">
        <span className="block truncate text-[14px] font-semibold text-[var(--color-ink)]">
          {item.name}
        </span>
        <span className="block text-[12px] text-[var(--color-muted)]">{item.unit}</span>
      </div>
      <div className="flex items-center gap-2">
        {qtyInCart > 0 && (
          <span className="rounded-full bg-[var(--color-accent-green-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-accent-green)]">
            {qtyInCart} in order
          </span>
        )}
        <div className="flex items-center rounded-lg border border-[var(--color-line)]">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label={`Decrease quantity for ${item.name}`}
            className="flex h-8 w-8 items-center justify-center text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            &minus;
          </button>
          <span className="w-6 text-center text-[13px] font-medium text-[var(--color-ink)]">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => q + 1)}
            aria-label={`Increase quantity for ${item.name}`}
            className="flex h-8 w-8 items-center justify-center text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            onAdd(qty);
            setQty(1);
            setAdded(true);
            setTimeout(() => setAdded(false), 1400);
          }}
          className="rounded-full bg-[var(--color-accent)] px-3.5 py-2 text-[12px] font-semibold text-white transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          {added ? "Added" : "Add"}
        </button>
      </div>
    </li>
  );
}

export function PortalDemo({
  interactive = true,
  view: viewProp,
  onViewChange,
}: {
  interactive?: boolean;
  view?: "admin" | "client";
  onViewChange?: (view: "admin" | "client") => void;
}) {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [internalView, setInternalView] = useState<"admin" | "client">("admin");
  const view = viewProp ?? internalView;
  const setView = onViewChange ?? setInternalView;
  const [page, setPage] = useState<AdminPage>("orders");
  const [clientPage, setClientPage] = useState<ClientPage>("shop");
  const [category, setCategory] = useState<"All" | ProductCategory>("All");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [products, setProducts] = useState<AdminProduct[]>(INITIAL_ADMIN_PRODUCTS);
  const [clientOrders, setClientOrders] = useState<ClientOrder[]>(INITIAL_CLIENT_ORDERS);
  const [notices, setNotices] = useState<Notice[]>(INITIAL_NOTICES);
  const [noticeDraft, setNoticeDraft] = useState("");
  const incomingIndex = useRef(0);

  useEffect(() => {
    if (!interactive) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      const next = INCOMING[incomingIndex.current];
      if (!next) {
        clearInterval(interval);
        return;
      }
      incomingIndex.current += 1;
      setOrders((current) => [{ ...next, arriving: true }, ...current]);
      setToast(`Order in by ${next.channel.toLowerCase()}. Confirmation sent to ${next.customer}.`);
      setTimeout(() => setToast(null), 4200);
    }, 7000);
    return () => clearInterval(interval);
  }, [interactive]);

  const advance = (id: string) => {
    setOrders((current) =>
      current.map((order) => {
        if (order.id !== id) return order;
        const next = NEXT_STATUS[order.status];
        return next
          ? { ...order, status: next, arriving: false, justUpdated: true }
          : order;
      })
    );
    setTimeout(() => {
      setOrders((current) =>
        current.map((order) =>
          order.id === id ? { ...order, justUpdated: false } : order
        )
      );
    }, 600);
  };

  const toggleProductActive = (id: string) => {
    setProducts((current) =>
      current.map((p) => (p.id === id ? { ...p, active: !p.active } : p))
    );
  };

  const postNotice = () => {
    if (!noticeDraft.trim()) return;
    setNotices((current) => [
      { id: `notice-${Date.now()}`, title: noticeDraft.trim(), body: "Posted just now." },
      ...current,
    ]);
    setNoticeDraft("");
    setToast("Notice posted to all customers.");
    setTimeout(() => setToast(null), 4200);
  };

  const visible = orders.filter((o) => tab === "All" || o.status === tab);
  const count = (s: Status) => orders.filter((o) => o.status === s).length;

  // Re-keying this wrapper on every page/view/category switch remounts just
  // this subtree (not the parent state above it) so the swap gets a fade
  // instead of a hard cut. Order status changes don't touch this key, so
  // the per-row demo-order-in/demo-status-pulse animations are unaffected.
  const contentKey = `${view}-${view === "admin" ? page : clientPage}-${
    view === "client" && clientPage === "shop" ? category : "all"
  }`;

  return (
    <div
      className={`frame-browser frame-screen ${interactive ? "" : "pointer-events-none select-none"}`}
      aria-hidden={interactive ? undefined : true}
    >
      {/* Chrome bar: plain filename-style label, no traffic-light dots.
          This is a product screen, not a decorative browser mockup. */}
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-[var(--color-line)] bg-[var(--color-bg-deep)] px-4 py-2.5">
        <span className="font-display text-[11px] font-semibold tracking-wide text-[var(--color-muted)]">
          {view === "admin" ? PAGE_TITLES[page] : CLIENT_PAGE_TITLES[clientPage]}
        </span>
        <span className="text-[10px] font-semibold tracking-[0.08em] text-[var(--color-muted)] uppercase">
          <span className="sm:hidden">Sample data</span>
          <span className="hidden sm:inline">Working demo, sample data</span>
        </span>
      </div>

      <div className="flex flex-col sm:flex-row">
        {/* Desktop sidebar */}
        <aside className="hidden shrink-0 flex-col border-r border-[var(--color-line)] bg-[var(--color-bg-deep)] sm:flex sm:w-[180px]">
          <div className="border-b border-[var(--color-line)] px-4 py-4">
            <Logo />
            <div className="mt-1.5 text-[9px] font-semibold tracking-[0.2em] text-[var(--color-muted)] uppercase">
              {view === "admin" ? "Business Portal" : "Ordering Portal"}
            </div>
          </div>
          <nav className="flex-1 px-2 py-3">
            {view === "admin"
              ? NAV_ITEMS.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setPage(item.key)}
                    className={`mb-0.5 flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-colors ${
                      page === item.key
                        ? "bg-[var(--color-ink)]/[0.07] text-[var(--color-ink)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))
              : CLIENT_NAV_ITEMS.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setClientPage(item.key)}
                    className={`mb-0.5 flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-colors ${
                      clientPage === item.key
                        ? "bg-[var(--color-ink)]/[0.07] text-[var(--color-ink)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
          </nav>
          <div className="border-t border-[var(--color-line)] px-3 py-3.5">
            {view === "admin" ? (
              <button
                onClick={() => setView("client")}
                className="flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 17l5-5-5-5M21 12H9M13 21H5a2 2 0 01-2-2V5a2 2 0 012-2h8" />
                </svg>
                Switch to client view
              </button>
            ) : (
              <button
                onClick={() => setView("admin")}
                className="flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to admin view
              </button>
            )}
          </div>
        </aside>

        {/* Mobile page pills */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-[var(--color-line)] bg-[var(--color-bg-deep)] px-3 py-2.5 sm:hidden">
          {view === "admin"
            ? NAV_ITEMS.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setPage(item.key)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-[12px] font-semibold transition-colors ${
                    page === item.key
                      ? "bg-[var(--color-ink)] text-[var(--color-bg)]"
                      : "bg-[var(--color-ink)]/[0.05] text-[var(--color-muted)]"
                  }`}
                >
                  {item.label}
                </button>
              ))
            : CLIENT_NAV_ITEMS.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setClientPage(item.key)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-[12px] font-semibold transition-colors ${
                    clientPage === item.key
                      ? "bg-[var(--color-ink)] text-[var(--color-bg)]"
                      : "bg-[var(--color-ink)]/[0.05] text-[var(--color-muted)]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
          {view === "admin" ? (
            <button
              onClick={() => setView("client")}
              className="ml-auto shrink-0 rounded-full border border-[var(--color-accent)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-accent)]"
            >
              Client view
            </button>
          ) : (
            <button
              onClick={() => setView("admin")}
              className="ml-auto shrink-0 rounded-full border border-[var(--color-line)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-muted)]"
            >
              Admin view
            </button>
          )}
        </div>

        <div className="relative min-w-0 flex-1">
          <div key={contentKey} className="content-fade-in h-[460px] overflow-y-auto sm:h-[540px]">
          {view === "admin" && page === "dashboard" && (
            <div className="p-4">
              <div className="mb-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-deep)] p-3">
                  <p className="text-[11px] font-medium text-[var(--color-muted)]">Today&apos;s orders</p>
                  <p className="mt-1 text-[22px] font-semibold text-[var(--color-ink)]">{orders.length}</p>
                </div>
                <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-deep)] p-3">
                  <p className="text-[11px] font-medium text-[var(--color-muted)]">New</p>
                  <p className="mt-1 text-[22px] font-semibold text-[#b8481a]">{count("New")}</p>
                </div>
                <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-deep)] p-3">
                  <p className="text-[11px] font-medium text-[var(--color-muted)]">Printed</p>
                  <p className="mt-1 text-[22px] font-semibold text-[var(--color-accent-blue)]">{count("Printed")}</p>
                </div>
                <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-deep)] p-3">
                  <p className="text-[11px] font-medium text-[var(--color-muted)]">Done</p>
                  <p className="mt-1 text-[22px] font-semibold text-[var(--color-accent-green)]">{count("Done")}</p>
                </div>
              </div>

              <div className="rounded-lg border border-[var(--color-line)]">
                <div className="flex items-center justify-between border-b border-[var(--color-line)] px-4 py-3">
                  <p className="text-[13px] font-semibold text-[var(--color-ink)]">Recent orders</p>
                  <button
                    onClick={() => setPage("orders")}
                    className="text-[12px] font-semibold text-[var(--color-accent)]"
                  >
                    View all
                  </button>
                </div>
                <ul>
                  {orders.slice(0, 3).map((order) => (
                    <li
                      key={order.id}
                      className="flex items-center justify-between gap-3 border-b border-[var(--color-line)] px-4 py-3 last:border-b-0"
                    >
                      <span className="min-w-0 truncate text-[13px] font-medium text-[var(--color-ink)]">
                        {order.customer}
                      </span>
                      <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${STATUS_STYLES[order.status]}`}>
                        {order.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-[12px] text-[var(--color-muted)]">
                Orders close at <span className="font-semibold text-[var(--color-ink)]">4:00 PM</span> for next-day delivery.
              </p>
            </div>
          )}

          {view === "admin" && page === "orders" && (
            <>
              <div className="flex flex-wrap items-center gap-2 border-b border-[var(--color-line)] px-4 py-3">
                <div role="tablist" aria-label="Filter orders by status" className="flex flex-wrap items-center gap-2">
                  {TABS.map((t) => (
                    <button
                      key={t}
                      role="tab"
                      aria-selected={tab === t}
                      onClick={() => setTab(t)}
                      className={`rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${
                        tab === t
                          ? "bg-[var(--color-ink)] text-[var(--color-bg)]"
                          : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                      }`}
                    >
                      {t === "All" ? `All (${orders.length})` : `${t} (${count(t)})`}
                    </button>
                  ))}
                </div>
                {interactive && (
                  <span className="ml-auto text-[11px] text-[var(--color-muted)]">
                    <span className="sm:hidden">Tap an order to open it</span>
                    <span className="hidden sm:inline">Click an order to open it</span>
                  </span>
                )}
              </div>

              <ul>
                {visible.map((order) => {
                  const open = openId === order.id;
                  const nextLabel = NEXT_LABEL[order.status];
                  return (
                    <li
                      key={order.id}
                      className={`border-b border-[var(--color-line)] last:border-b-0 ${
                        order.arriving ? "demo-order-in" : ""
                      }`}
                    >
                      <button
                        onClick={() => setOpenId(open ? null : order.id)}
                        aria-expanded={open}
                        className="grid w-full grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 px-4 py-3.5 text-left transition-colors hover:bg-[var(--color-ink)]/[0.03] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--color-accent)] sm:grid-cols-[92px_1fr_auto_auto_auto]"
                      >
                        <span className="hidden text-[12px] font-semibold text-[var(--color-muted)] sm:block">
                          {order.id}
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-[14px] font-semibold text-[var(--color-ink)]">
                            {order.customer}
                          </span>
                          <span className="block text-[12px] text-[var(--color-muted)]">
                            {order.kind}, {order.items} items, {order.time}
                            <span className="sm:hidden">
                              , in by {order.channel.toLowerCase()}
                            </span>
                          </span>
                        </span>
                        <span className="hidden rounded-full border border-[var(--color-line)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-muted)] sm:block">
                          {order.channel}
                        </span>
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-300 ${STATUS_STYLES[order.status]} ${
                            order.justUpdated ? "demo-status-pulse" : ""
                          }`}
                        >
                          {order.status}
                        </span>
                        <span className="hidden text-[12px] font-medium text-[var(--color-muted)] sm:block">
                          {open ? "Close" : "View"}
                        </span>
                      </button>

                      {open && (
                        <div className="flex flex-wrap items-center justify-between gap-3 bg-[var(--color-bg-deep)] px-4 py-3.5">
                          <div className="text-[12px] leading-relaxed text-[var(--color-muted)]">
                            Came in by {order.channel.toLowerCase()} at {order.time}.
                            Confirmation went back to {order.customer} the moment it
                            landed.
                          </div>
                          {nextLabel ? (
                            <button
                              onClick={() => advance(order.id)}
                              className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-[12px] font-semibold text-white transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                            >
                              {nextLabel}
                            </button>
                          ) : (
                            <span className="text-[12px] font-semibold text-[var(--color-accent-green)]">
                              Complete
                            </span>
                          )}
                        </div>
                      )}
                    </li>
                  );
                })}
                {visible.length === 0 && (
                  <li className="px-4 py-8 text-center text-[13px] text-[var(--color-muted)]">
                    Nothing here right now.
                  </li>
                )}
              </ul>
            </>
          )}

          {view === "admin" && page === "products" && (
            <ul>
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center justify-between gap-3 border-b border-[var(--color-line)] px-4 py-3.5 last:border-b-0"
                >
                  <div className="min-w-0">
                    <span className="block truncate text-[14px] font-semibold text-[var(--color-ink)]">
                      {product.name}
                    </span>
                    <span className="block text-[12px] text-[var(--color-muted)]">
                      {product.category}, {product.unit}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleProductActive(product.id)}
                    className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors ${
                      product.active
                        ? "bg-[var(--color-accent-green-soft)] text-[var(--color-accent-green)]"
                        : "bg-[var(--color-ink)]/[0.05] text-[var(--color-muted)]"
                    }`}
                  >
                    {product.active ? "Active" : "Paused"}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {view === "admin" && page === "customers" && (
            <ul>
              {CUSTOMERS.map((customer) => (
                <li
                  key={customer.id}
                  className="flex items-center justify-between gap-3 border-b border-[var(--color-line)] px-4 py-3.5 last:border-b-0"
                >
                  <div className="min-w-0">
                    <span className="block truncate text-[14px] font-semibold text-[var(--color-ink)]">
                      {customer.name}
                    </span>
                    <span className="block text-[12px] text-[var(--color-muted)]">{customer.kind}</span>
                  </div>
                  <span className="shrink-0 rounded-full bg-[var(--color-accent-green-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-accent-green)]">
                    Active
                  </span>
                </li>
              ))}
            </ul>
          )}

          {view === "admin" && page === "messages" && (
            <div>
              <div className="flex flex-col gap-2 border-b border-[var(--color-line)] px-4 py-3.5 sm:flex-row">
                <input
                  type="text"
                  value={noticeDraft}
                  onChange={(e) => setNoticeDraft(e.target.value)}
                  placeholder="Post a notice to every customer…"
                  className="flex-1 rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-deep)] px-3 py-2 text-[13px] text-[var(--color-ink)] outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
                />
                <button
                  onClick={postNotice}
                  className="shrink-0 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-[12px] font-semibold text-white transition-all hover:brightness-110"
                >
                  Post notice
                </button>
              </div>
              <ul>
                {notices.map((notice) => (
                  <li key={notice.id} className="border-b border-[var(--color-line)] px-4 py-3.5 last:border-b-0">
                    <p className="text-[13px] font-semibold text-[var(--color-ink)]">{notice.title}</p>
                    <p className="mt-0.5 text-[12px] text-[var(--color-muted)]">{notice.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {view === "client" && clientPage === "shop" && (
            <>
              <div className="flex flex-wrap items-center gap-2 border-b border-[var(--color-line)] px-4 py-3">
                {CATEGORY_TABS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition-colors ${
                      category === c
                        ? "bg-[var(--color-ink)] text-[var(--color-bg)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
                <span className="ml-auto hidden text-[11px] text-[var(--color-muted)] sm:inline">
                  Browse and add items to the order
                </span>
              </div>

              <ul>
                {CATALOGUE.filter((item) => category === "All" || item.category === category).map((item) => (
                  <ClientProductRow
                    key={item.id}
                    item={item}
                    qtyInCart={cart[item.id] ?? 0}
                    onAdd={(qty) =>
                      setCart((current) => ({ ...current, [item.id]: (current[item.id] ?? 0) + qty }))
                    }
                  />
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line)] bg-[var(--color-bg-deep)] px-4 py-3.5">
                {Object.keys(cart).length === 0 ? (
                  <span className="text-[12px] text-[var(--color-muted)]">
                    Add items above to build an order.
                  </span>
                ) : (
                  <>
                    <span className="text-[12px] font-medium text-[var(--color-muted)]">
                      {Object.values(cart).reduce((sum, n) => sum + n, 0)} items in this order
                    </span>
                    <button
                      onClick={() => {
                        const itemCount = Object.values(cart).reduce((sum, n) => sum + n, 0);
                        setClientOrders((current) => [
                          {
                            id: `ORD-${1054 + current.length}`,
                            summary: `${itemCount} items, just now`,
                            time: "Just now",
                            status: "Submitted",
                          },
                          ...current,
                        ]);
                        setToast("Order sent. Confirmation is on its way.");
                        setCart({});
                        setTimeout(() => setToast(null), 4200);
                      }}
                      className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-[12px] font-semibold text-white transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                    >
                      Submit order
                    </button>
                  </>
                )}
              </div>
            </>
          )}

          {view === "client" && clientPage === "orders" && (
            <ul>
              {clientOrders.map((order) => (
                <li
                  key={order.id}
                  className="flex items-center justify-between gap-3 border-b border-[var(--color-line)] px-4 py-3.5 last:border-b-0"
                >
                  <div className="min-w-0">
                    <span className="block truncate text-[14px] font-semibold text-[var(--color-ink)]">
                      {order.id}
                    </span>
                    <span className="block text-[12px] text-[var(--color-muted)]">
                      {order.summary}
                    </span>
                  </div>
                  <span className="shrink-0 rounded-full bg-[var(--color-accent-blue-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-accent-blue)]">
                    {order.status}
                  </span>
                </li>
              ))}
              {clientOrders.length === 0 && (
                <li className="px-4 py-8 text-center text-[13px] text-[var(--color-muted)]">
                  No orders placed yet.
                </li>
              )}
            </ul>
          )}

          {view === "client" && clientPage === "notices" && (
            <ul>
              {notices.map((notice) => (
                <li key={notice.id} className="border-b border-[var(--color-line)] px-4 py-3.5 last:border-b-0">
                  <p className="text-[13px] font-semibold text-[var(--color-ink)]">{notice.title}</p>
                  <p className="mt-0.5 text-[12px] text-[var(--color-muted)]">{notice.body}</p>
                </li>
              ))}
            </ul>
          )}
          </div>

          {/* Confirmation toast */}
          <div aria-live="polite">
            {toast && (
              <div className="demo-order-in absolute right-4 bottom-4 flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-deep)] px-4 py-3 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.25)]">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-green-soft)] text-[var(--color-accent-green)]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth={3}>
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="max-w-[260px] text-[12px] font-medium text-[var(--color-ink)]">
                  {toast}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
