import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

# Create workbook and sheet
wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Estudio Keywords Home"

# Ensure grid lines are visible
ws.views.sheetView[0].showGridLines = True

# Data definition
data = [
    # (KW, Vol, Type)
    ("diseño web para empresas", 500, "Principal"),
    ("agencia de diseño web", 5000, "Secundaria"),
    ("diseñador de páginas web", 5000, "Secundaria"),
    ("diseño web profesional", 500, "Secundaria"),
    ("diseño de pagina web profesional", 500, "Secundaria"),
    ("agencia de desarrollo web", 500, "Secundaria"),
    ("desarrollo web profesional", 500, "Secundaria"),
    ("diseño y desarrollo web", 500, "Secundaria"),
    ("paginas web a medida", 500, "Secundaria"),
    ("agencia de paginas web", 50, "Secundaria"),
]

# Color Palette (Elegant Dark Navy / Slate theme)
PRIMARY_COLOR = "1E293B"      # Dark Slate/Navy for Header
HEADER_TEXT_COLOR = "FFFFFF"  # White text
ACCENT_ROW = "F8FAFC"         # Zebra row light background
TOTAL_BG = "E2E8F0"           # Soft gray for totals
BORDER_COLOR = "CBD5E1"       # Light gray border
PRINCIPAL_TAG_BG = "DBEAFE"   # Soft Blue badge
PRINCIPAL_TAG_TXT = "1E40AF"
SEC_TAG_BG = "F1F5F9"         # Slate badge
SEC_TAG_TXT = "475569"

# Styles
font_title = Font(name="Segoe UI", size=16, bold=True, color="0F172A")
font_subtitle = Font(name="Segoe UI", size=10, italic=True, color="64748B")
font_header = Font(name="Segoe UI", size=11, bold=True, color=HEADER_TEXT_COLOR)
font_data = Font(name="Segoe UI", size=10, color="334155")
font_kw_principal = Font(name="Segoe UI", size=10, bold=True, color="0F172A")
font_total = Font(name="Segoe UI", size=11, bold=True, color="0F172A")

font_tag_principal = Font(name="Segoe UI", size=9, bold=True, color=PRINCIPAL_TAG_TXT)
font_tag_sec = Font(name="Segoe UI", size=9, bold=False, color=SEC_TAG_TXT)

fill_header = PatternFill(start_color=PRIMARY_COLOR, end_color=PRIMARY_COLOR, fill_type="solid")
fill_zebra = PatternFill(start_color=ACCENT_ROW, end_color=ACCENT_ROW, fill_type="solid")
fill_white = PatternFill(start_color="FFFFFF", end_color="FFFFFF", fill_type="solid")
fill_total = PatternFill(start_color=TOTAL_BG, end_color=TOTAL_BG, fill_type="solid")
fill_tag_principal = PatternFill(start_color=PRINCIPAL_TAG_BG, end_color=PRINCIPAL_TAG_BG, fill_type="solid")
fill_tag_sec = PatternFill(start_color=SEC_TAG_BG, end_color=SEC_TAG_BG, fill_type="solid")

thin_border = Border(
    left=Side(style='thin', color=BORDER_COLOR),
    right=Side(style='thin', color=BORDER_COLOR),
    top=Side(style='thin', color=BORDER_COLOR),
    bottom=Side(style='thin', color=BORDER_COLOR)
)

total_top_border = Border(
    top=Side(style='medium', color="0F172A"),
    bottom=Side(style='double', color="0F172A"),
    left=Side(style='thin', color=BORDER_COLOR),
    right=Side(style='thin', color=BORDER_COLOR)
)

align_left = Alignment(horizontal="left", vertical="center")
align_right = Alignment(horizontal="right", vertical="center")
align_center = Alignment(horizontal="center", vertical="center")

# Title Block
ws["B2"] = "Estructura de Keywords & Búsquedas - /home"
ws["B2"].font = font_title
ws["B3"] = "Resumen de volumen de búsquedas para la página de inicio"
ws["B3"].font = font_subtitle

# Headers
headers = ["Palabra Clave (Keyword)", "Tipo de Keyword", "Búsquedas Mensuales"]
start_row = 5
start_col = 2  # Column B

for c_idx, header in enumerate(headers, start=start_col):
    cell = ws.cell(row=start_row, column=c_idx, value=header)
    cell.font = font_header
    cell.fill = fill_header
    cell.alignment = align_center if c_idx == start_col + 1 else (align_right if c_idx == start_col + 2 else align_left)
    ws.row_dimensions[start_row].height = 28

# Data Rows
row_idx = start_row + 1
data_start_row = row_idx

for kw, vol, kw_type in data:
    ws.row_dimensions[row_idx].height = 22
    fill_current = fill_white if row_idx % 2 == 0 else fill_zebra

    # KW Cell
    cell_kw = ws.cell(row=row_idx, column=2, value=kw)
    cell_kw.font = font_kw_principal if kw_type == "Principal" else font_data
    cell_kw.alignment = align_left
    cell_kw.fill = fill_current
    cell_kw.border = thin_border

    # Type Cell
    cell_type = ws.cell(row=row_idx, column=3, value=kw_type)
    cell_type.font = font_tag_principal if kw_type == "Principal" else font_tag_sec
    cell_type.alignment = align_center
    cell_type.fill = fill_tag_principal if kw_type == "Principal" else fill_tag_sec
    cell_type.border = thin_border

    # Volume Cell
    cell_vol = ws.cell(row=row_idx, column=4, value=vol)
    cell_vol.font = font_data
    cell_vol.number_format = "#,##0"
    cell_vol.alignment = align_right
    cell_vol.fill = fill_current
    cell_vol.border = thin_border

    row_idx += 1

data_end_row = row_idx - 1

# Total Row
ws.row_dimensions[row_idx].height = 26
cell_tot_label = ws.cell(row=row_idx, column=2, value="/home (Total Búsquedas)")
cell_tot_label.font = font_total
cell_tot_label.alignment = align_left
cell_tot_label.fill = fill_total
cell_tot_label.border = total_top_border

cell_tot_type = ws.cell(row=row_idx, column=3, value="Total")
cell_tot_type.font = font_total
cell_tot_type.alignment = align_center
cell_tot_type.fill = fill_total
cell_tot_type.border = total_top_border

cell_tot_val = ws.cell(row=row_idx, column=4, value=f"=SUM(D{data_start_row}:D{data_end_row})")
cell_tot_val.font = font_total
cell_tot_val.number_format = "#,##0"
cell_tot_val.alignment = align_right
cell_tot_val.fill = fill_total
cell_tot_val.border = total_top_border

# Auto-fit Column Widths
ws.column_dimensions['A'].width = 3
ws.column_dimensions['B'].width = 38
ws.column_dimensions['C'].width = 18
ws.column_dimensions['D'].width = 24

# Save workbook
output_path = "c:/Users/usuario/Desktop/Carpetas/Proyectos/RubiqStudio/Estructura_Keywords_Home.xlsx"
wb.save(output_path)
print("Excel generado exitosamente en:", output_path)
